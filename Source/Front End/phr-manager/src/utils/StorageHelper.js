var ipfsAPI = require('ipfs-api');


let ipfs = ipfsAPI('ipfs.infura.io', '5001', { protocol: 'https' });

// expect file content
export function uploadFile(fileContent) {

    // let fileReader = new FileReader();
    // fileReader.readAsBinaryString(fileContent)
    //  var fileData = fileReader.result;

    return new Promise((resolve, reject) => {
        // fileReader.onload = () => {
        //     let data = fileReader.result;
        //     let buffer = Buffer.from(data);
        //     let content = []
        //     content.push({
        //         path: "file 1",
        //         content: buffer
        //     });

            ipfs.add(content, (err, res) => {
                if (err)
                    reject(err);
                else
                    resolve(res[0].hash);
            });
       // }
     });
}



        export function downloadFile(fileAddress) {
            return "the file";
        }