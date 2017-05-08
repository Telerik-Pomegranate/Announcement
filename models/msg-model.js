import firebaseModule from 'firebase-config';
import userModel from 'user-model';

class MsgModel {

    getChats(category) {
        return new Promise((resolve, reject) => {
            firebaseModule.database.child("chats/" + category + "/" + localStorage.getItem('userUid')).once('value', function (snapshot) {
                let chats = snapshot.val();
                if (!chats) {
                    chats = []
                }
                resolve(chats);                
            });
        });        
    }

    getConversation(msgId, listener) {
        firebaseModule.database.child("msgs/" + msgId).on('value', function (snapshot) {
            let msgs = snapshot.val();
            if (!msgs) {
                msgs = []
            }
            listener(msgs);                
        });
    }

    addMsg(msgId, msg) {
        firebaseModule.database.child('msgs/' + msgId).transaction(function (msgs) {
            msgs.push({
                "from": localStorage.getItem('username'),
                "time": new Date().toDateString(),
                "msg": msg
            });
            return msgs;
        });        
    }

    newConversation(fromName, toName, fromId, toId, ad, category, msg) {
        let newMsgKey = firebaseModule.database.child('msgs').push();
        let key = newMsgKey.key;
        firebaseModule.database.child('chats/sent/' + fromId).transaction(function (chats) {
            if (!chats) {
                chats = [];
            }
            chats.push({
                "user": toName,
                "adName": ad.head,
                "adId": ad.id,
                "adCategory": category,
                "msgs": key
            });
            return chats;
        });
        firebaseModule.database.child('chats/received/' + toId).transaction(function (chats) {
            if (!chats) {
                chats = [];
            }
            chats.push({
                "user": fromName,
                "adName": ad.head,
                "adId": ad.id,
                "adCategory": category,
                "msgs": key
            });
            return chats;
        });
        newMsgKey.set([{
            "from": fromName,
            "time": new Date().toDateString(),
            "msg": msg
        }])
    }
}

export default new MsgModel();