
    'use strict';
    var app = angular.module('myApp', [])
   
    .controller('HistController1', HistController1)
    .controller('HistController2', HistController2)
    .factory('HistFactory', HistFactory);

    HistController1.inject = ['HistFactory'];
    function HistController1(HistFactory) {
        var list1 = this;
        var histList = HistFactory();

        list1.items = histList.getItems();
        list1.itemName = "";

        list1.addItem = function () {
            histList.addItem(list1.itemName);
        }

        list1.removeItem = function (){
            histList.removeItem(itemIndex);
        };
    }

    HistController2.$inject = ['HistFactory'];
    function HistController2(HistFactory) {
      var list2 = this;
    
      // Use factory to create new shopping list service
      var histList = HistFactory(3);
    
      list2.items = histList.getItems();
    
      list2.itemName = "";
      
    
      list2.addItem = function () {
        try {
          histList.addItem(list2.itemName);
        } catch (error) {
          list2.errorMessage = error.message;
        }
    
      }
    
      list2.removeItem = function (itemIndex) {
        histList.removeItem(itemIndex);
      };
    }
    function HistService(maxItems) {
      var service = this;
    
      // List of shopping items
      var items = [];
    
      service.addItem = function (itemName) {
        if ((maxItems === undefined) ||
            (maxItems !== undefined) && (items.length < maxItems)) {
          var item = {
            name: itemName
          };
          items.push(item);
        }
        else {
          throw new Error("Max items (" + maxItems + ") reached.");
        }
      };
    
      service.removeItem = function (itemIndex) {
        items.splice(itemIndex, 1);
      };
    
      service.getItems = function () {
        return items;
      };
    }
    
    
    function HistFactory() {
      var factory = function (maxItems) {
        return new HistService(maxItems);
      };
    
      return factory;
    }
    
    
    

  