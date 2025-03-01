/**
 * Class for save/transport local data
 *
 * @version 1.0.0
 */

class data {

    constructor() {
        this.data = {};
        this.listen = {};
    }


    /**
     * Function for callback registration when
     * performing an action with data class memory
     *
     * @param event
     * @param callback
     */

    on (event='event', callback=false) {
        if (!(event in this.listen)) { this.listen[event] = []; }
        this.listen[event].push(callback);
    }


    /**
     * Function to store data in a cell
     *
     * @param key
     * @param value
     */

    set (key='default', value='default') {
        this.data[key] = value;
    }


    /**
     * Function to update the data sheet in a cell
     *
     * @param key
     * @param value
     */

    append (key='default', value='default') {
        if (!(key in this.data)) { this.data[key] = []; } else {
            if (!(typeof this.data[key] == typeof [])) { this.data[key] = []; }
        }
        (this.data[key].length > process.env.MEMORY_MAX ? this.data[key].shift() : null);
        this.data[key].push(value);
    }


    /**
     * Function for obtaining data from a cell
     *
     * @param key
     * @returns {boolean|*}
     */

    get (key='default') {
        if (key in this.data) { return this.data[key]; } else { return false; }
    }


    /**
     * Function for getting all
     * the keys to enter by incoming eruption
     *
     * @param key
     * @param fullKey
     * @returns {{}}
     */

    list (key="default", fullKey=true) {

        var returnData = {};

        for (const key_ in this.data) {
            if (key_.indexOf(key) + 1) {
                returnData[fullKey ? key_ : key_.split('/').join('/').replace(key, '')] = this.data[key_];
            }
        }

        return returnData;

    }


}

module.exports = data;