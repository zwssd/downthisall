/**
*时间: 18-9-24
*作者: zwssd <349705141@qq.com>
*版权: GPL v2
*/

"use strict";

class zStorageOptions{
    constructor(conn){
        this.dbName = 'zStorage';
        this.sName = 'zStorage';
        Object.assign(this,conn);
    }
}

class zStorage extends zStorageOptions{

    static dbResult(db) {
        return new Promise((resolve, reject) => {
            db.onsuccess = () => resolve(db.result);
            db.onerror = () => reject(db.error);
        });
    }

    constructor(options = {}){
        super(options);
        const dbRequest = indexedDB.open(this.dbName, 9527);
        dbRequest.onupgradeneeded = function (e) {
            dbRequest.result.createObjectStore(this.sName);
        }

        this.init = SimpleStorage.dbResult(dbRequest).then(v => this.mydatabase = v);
    }

    action(mode = 'readonly'){
        return this.mydatabase.transaction(this.sName, mode).objectStore(this.sName);

    }

    put(key, value){
        this.action('readwrite').put(value,key);
        return 'put is ok!';
    }

    get(key){
        this.action().get(key);
        return 'get is ok!';
    }
}
