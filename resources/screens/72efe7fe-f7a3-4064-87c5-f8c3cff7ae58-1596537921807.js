jQuery("#simulation")
  .on("click", ".s-72efe7fe-f7a3-4064-87c5-f8c3cff7ae58 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-loginBtn")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-72efe7fe-f7a3-4064-87c5-f8c3cff7ae58 #s-loginBtn > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#3700B3",
                        "background-attachment": "scroll",
                        "box-shadow": "0px 5px 15px 0px #999999"
                      }
                    }
                  },{
                    "#s-72efe7fe-f7a3-4064-87c5-f8c3cff7ae58 #s-loginBtn": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-72efe7fe-f7a3-4064-87c5-f8c3cff7ae58 #s-loginBtn": {
                      "attributes-ie": {
                        "-pie-background": "#3700B3",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-72efe7fe-f7a3-4064-87c5-f8c3cff7ae58 #s-loginBtn > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#6200EE",
                        "background-attachment": "scroll",
                        "box-shadow": "0px 2px 5px 0px #999999"
                      }
                    }
                  },{
                    "#s-72efe7fe-f7a3-4064-87c5-f8c3cff7ae58 #s-loginBtn": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-72efe7fe-f7a3-4064-87c5-f8c3cff7ae58 #s-loginBtn": {
                      "attributes-ie": {
                        "-pie-background": "#6200EE",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/a0472223-f5c1-4e87-8c4a-5fce6e2b038d"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/72efe7fe-f7a3-4064-87c5-f8c3cff7ae58"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });