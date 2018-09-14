
const fs = require('fs')
const path = require('path')
const csv = require('csvtojson')
const jsonfile = require('jsonfile')

const csvfileName = 'customer-data.csv'
const jsonfileName = 'customer-data.json'

const csvFilePath = path.join(__dirname,csvfileName)
const jsonFilePath = path.join(__dirname,jsonfileName)




csv()
.fromFile(csvFilePath)
.then((jsonObj=>{ 
    //console.log(jsonObj) 
    jsonfile.writeFile(jsonFilePath,jsonObj,(error)=>{
        if(error){
            console.error(`There is an error: ${error.message}`)
        }
    })
}))
 
 console.log(`Finished writing the json to : ${jsonFilePath}`)
 