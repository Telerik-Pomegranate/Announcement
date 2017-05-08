import announModel from 'announ-model';
import msgModel from 'msg-model';
import templates from 'templates';
import Handlebars from 'handlebars';

class MsgController {
    leaveMsg(sammy) {
        let id = sammy.params.id
        let category = sammy.params.category
        templates.load('leave-a-msg').then(templateHTML => {
            let template = Handlebars.compile(templateHTML);
            $('#main').html(template({
                id,
                category
            }));
        })
    }

    sendMsg(sammy) {
        let msg = sammy.params.message
        let adId = sammy.params.id
        let adCategory = sammy.params.category
        announModel.getById(adId, adCategory).then(ad => {
            msgModel.newConversation(
                localStorage.getItem("username"),
                ad.userName,
                localStorage.getItem("userUid"),
                ad.currentUserId,
                ad,
                adCategory,
                msg);
            sammy.redirect("#/" + adCategory + "/announcement/" + adId);
        })

    }

    getChats(sammy) {
        let category = sammy.params.category;
        msgModel.getChats(category).then(chats => {
            templates.load('chats').then(templateHTML => {
                let template = Handlebars.compile(templateHTML);
                $('#main').html(template({
                    chats,
                    category
                }));
            })
        })
    }
    getMsgs(sammy) {
        templates.load('msgs').then(templateHTML => {
            let template = Handlebars.compile(templateHTML);
            $('#main').html(template({
                msgId: sammy.params.msgId
            }));
            msgModel.getConversation(sammy.params.msgId, function (msgs) {
               msgs = msgs.map(function(msg) {
                    msg.isCurrentUser = msg.from == localStorage.getItem("username")
                    return msg;
                });
                templates.load('msg-details').then(templateHTML => {
                    let template = Handlebars.compile(templateHTML);
                    $('#msgs').html(template({
                        msgs
                    }));
                })
            });
        })
    }
    addMsg(sammy) {
        let msg = sammy.params.message
        let msgId = sammy.params.msgId
        msgModel.addMsg(msgId, msg);
    }
}

const msgController = new MsgController();
export default msgController;