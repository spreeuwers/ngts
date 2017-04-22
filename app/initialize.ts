
import {Welcome} from './Welcome';
import angular from 'angular';


var app = angular.module('demo', [])
    .controller('WelcomeController', Welcome);
