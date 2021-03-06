/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        window.plugins.PushbotsPlugin.initialize("573f53354a9efab77c8b456b", {"android":{"sender_id":"484433023834"}});
        
        window.plugins.PushbotsPlugin.on("registered", function(token){
           alert("Registro UNO "+token);
           window.plugins.PushbotsPlugin.updateAlias(device.uuid);
       });

        /*var informacion='Nombre del dispositivo ' + device.name + '<br />' + 
                        'Version de Cordova: ' + device.cordova + '<br />' + 
                        'Sistema operativo: ' + device.platform + '<br />' +
                        'Version: ' + device.version + '<br />'+
                        'Identificador unico universal: ' + device.uuid + '<br />';
        //elemento.innerHTML = informacion;

        alert(informacion);*/
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};



//credencial: AIzaSyDa_yJ52aXq7TBwpcp-Lxvew72N0horp6c
//numero projecto: 484433023834

//api pushboot: 573f53354a9efab77c8b456b
//clave pushboot: dbf6d302c858ce28193ce65a7347e09b