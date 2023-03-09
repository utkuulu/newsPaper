import { Router } from 'meteor/iron:router';

Router.route('/', function () {
  this.render('Home');
});

Router.route('/england-news', function () {
  this.render('EnglandNews');
});

Router.route('/germany-news', function () {
  this.render('GermanyNews');
});

Router.route('/turkey-news', function () {
  this.render('TurkeyNews');
});
