import React, { Component } from 'react';
import { Row, Col, Button } from 'antd'
import 'antd/lib/button/style/css';


import * as EncryptionHelper from '../utils/EncryptionHelper'
import * as StorageHelper from '../utils/StorageHelper'
//import * as PHRHelper from '../utils/PHRSmartContractHelper'
import * as EthHelper from '../utils/EtherumHelper'
import * as FileSaver from '../../node_modules/file-saver/dist/FileSaver';

class PatientViewer extends Component {
    
    uploadFile = (e) => {

        var reader = new FileReader();

        reader.onload=(e)=>{
            var plainFile = e.target.result;
            var sKey = EncryptionHelper.generateSharedKey();
            var encryptedFile = EncryptionHelper.encrypt(plainFile, sKey);
             StorageHelper.uploadFile(encryptedFile)
                .then((res)=>{
                    console.log(res);
                });
        };

        reader.readAsText(e.target.files[0]);
        
         
       

        //var pubKey = EthHelper.getCurrentAccount();
        //var encryptedSharedKey =  EncryptionHelper.encrypt(sKey, pubKey);
        //PHRHelper.addFileAccess(fileAddress, encryptedSharedKey);

        //var fileName = e.target.files[0].name;
    }

    downloadFile = (e)=>{
        StorageHelper.downloadFile("QmYRqKe8J1PzHuC4AoGBQiqqqPRTz1DMSp4UaZMEamyQFn")
            .then((file)=>{
                console.log(file);
                var newfile = new File(new Buffer(file,"binary"), "hello.jpg", {type: "image/jpeg"});
                FileSaver.saveAs(newfile);
            });
    }  


    render() {
        return (
           <div>
           <input type="file" onChange={this.uploadFile} />
           <input type="button"  onClick={this.downloadFile} text="Download " ></input>
        </div>
        );
    }
}

export default PatientViewer;