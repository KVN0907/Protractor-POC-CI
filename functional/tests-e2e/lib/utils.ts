import {browser, ExpectedConditions} from "protractor";

export class Utils {
    /**
     * Get a random floating point number between `min` and `max`.
     *
     * @param {number} min - min number
     * @param {number} max - max number
     * @return {number} a random floating point number
     */
    static getRandomFloat(min, max) {
        return parseFloat(Math.random() * (max - min) + min).toFixed(2);
    }

    static getRandomAcctNumString = function (characterLength) {
        var randomAcctNum = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.-";
        for (var i = 0; i < characterLength; i++)
            randomAcctNum += possible.charAt(Math.floor(Math.random() * possible.length));
        return randomAcctNum;

    }

  /*
    static getElementAttributeValue = function (elem) {
        var elemAttributeValue = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.-";
        for (var i = 0; i < characterLength; i++)
            randomAcctNum += possible.charAt(Math.floor(Math.random() * possible.length));
        return randomAcctNum;

    }
*/

    static getDateFiltersStartMonth = function(offsetNum, calendarValue) {
        const moment = require('moment');
        let getFilterStartMonth = moment.utc().subtract(offsetNum, calendarValue).startOf('month').format('MMMM YYYY');
        return getFilterStartMonth;

    }

    static getDateFiltersEndMonth = function(offsetNum, calendarValue) {
        const moment = require('moment');
        let getFilterEndMonth = moment.utc().subtract(offsetNum, calendarValue).startOf('month').format('MMMM YYYY');
        return getFilterEndMonth;

    }
    static getDateFiltersStartYear = function(offsetNum, calendarValue) {
        const moment = require('moment');
        let getFilterStartYear = moment.utc().subtract(offsetNum, calendarValue).startOf('month').format('YYYY');
        return getFilterStartYear;
    }

    static getDateFiltersEndYear = function(offsetNum, calendarValue) {
        const moment = require('moment');
        let getFilterEndYear = moment.utc().subtract(offsetNum, calendarValue).startOf('month').format('YYYY');
        return getFilterEndYear;
    }

    static getDateFiltersStartDate = function(offsetNum, calendarValue) {
        const moment = require('moment');
        let getFilterStartDate = moment.utc().subtract(offsetNum, calendarValue).startOf('month').format('MMMM D, YYYY');
        return getFilterStartDate;
    }

    static getDateFiltersEndDate = function(offsetNum, calendarValue) {
        const moment = require('moment');
        let getFilterEndDate = moment.utc().subtract(offsetNum, calendarValue).endOf('month').format('MMMM D, YYYY');
        return getFilterEndDate;
    }

    static getStartDateTime = function(offsetNum, calendarValue) {
        const moment = require('moment');
        let m1 = moment().subtract(offsetNum, calendarValue).startOf('month');
        let getStartDateTime = m1.clone().utc().format('YYYY-MM-DD HH:mm:ss');
        return getStartDateTime;
    }

    static getEndDateTime = function(offsetNum, calendarValue) {
        const moment = require('moment');
        let m2 = moment().subtract(offsetNum, calendarValue).startOf('month');
        let getEndDateTime = m2.clone().utc().format('YYYY-MM-DD HH:mm:ss');
        return getEndDateTime;
    }

}
