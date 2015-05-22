'use strict';

app.service('dataService', function () {
    //to create unique contact id
    var uid = 1;var i = 1;
     
    //contacts array to hold list of all contacts
    var temp = [{
        id: 0,
        'name': 'Test',
        'email': 'test@gmail.com',
        'phone': '123-2343-44',
        'password':"test@123"
    }];

   localStorage.setItem("contacts", JSON.stringify(temp)); 

   var contacts = JSON.parse(localStorage.getItem("contacts"));
     
    //save method create a new contact if not already exists
    //else update the existing object
    this.save = function (contact) {
        if (contact.id == undefined) {
            //if this is new contact, add it in contacts array
            contact.id = uid++;
            contacts.push(contact);
        } else {
            //for existing contact, find this contact using id
            //and update it.
            for (i in contacts) {
                if (contacts[i].id == contact.id) {
                    contacts[i] = contact;
                }
            }
        }
        localStorage.setItem("contacts", JSON.stringify(contacts)); 
    }
 
    //simply search contacts list for given id
    //and returns the contact object if found
    this.get = function (id) {
        for (i in contacts) {
            if (contacts[i].id == id) {
                return contacts[i];
            }
        }
 
    }
     
    //iterate through contacts list and delete 
    //contact if found
    this.delete = function (id) {
        for (i in contacts) {
            if (contacts[i].id == id) {
                contacts.splice(i, 1);
            }
        }
    }
 
    //simply returns the contacts list
    this.list = function () {
        return contacts;
    }
});