import User from './user';
import UserModel from 'server/models/user.model';
import passport from 'passport';
const requireAuth = require('server/middleware/passport');

const requireSignin = passport.authenticate('local', { session: false });

export default (app) => {

    app.route('/api/user/all')
        .get((request, response) => {
            UserModel.getUserList()
                .then((data) => response.json(data))
                .catch((err) => console.log);
        });

    app.route('/api/user/login')
        .get((request, response) => {
            UserModel.find({}, (err, users) => {
                if (err) {
                    throw err;
                }

                response.json(users);
            });
        })
        .post(requireSignin, function(request, response) {
            return User.signin(request, response);
        });

    app.route('/api/user/register')
        .post(function (request, response) {
            return User.register(request, response).catch(console.log);
        });

    app.route('/api/user/activate')
        .post(function(request, response) {
            return User.activate(request, response).catch(console.log);
        });

    app.route('/api/user/verify/:id')
        .get(User.verify);

    app.route('/api/user/password/reset')
        .post(User.resetPassword);

    app.route('/api/user/password/reset/:id')
        .get(User.resetPasswordChange)
        .post(function(request,response) {
            return User.resetPasswordAccept(request,response).catch(console.log);
        });

};
