var myApp = angular.module('myApp', []);

myApp.controller('myController', ['$scope', function ($scope) {
    $scope.greeting = 'Hola!';

    $scope.allParticipants = {
        aanand: {
            name: "Anand",
            players: {
                player1: {
                    name: "Warner",
                    country:"AUS",
                    value:'35m',
                    totalpoints: '-'
                },
                player2: {
                    name: "Willimson",
                    country:"NZ",
                    value:'30m',
                    totalpoints: '-'
                },
                player3: {
                    name: "Malinga",
                    country:"SL",
                    value:'13m',
                    totalpoints: 7
                },
                player4: {
                    name: "Thisara",
                    country:"SL",
                    value:'5m',
                    totalpoints: 0
                },
                player5: {
                    name: "Azhar ali",
                    country:"PAK",
                    value:'5m',
                    totalpoints: 74
                },
                player6: {
                    name: "Ross taylor",
                    country:"NZ",
                    value:'10m',
                    totalpoints: '-'
                },
                player7: {
                    name: "Morne morkel",
                    country:"SA",
                    value:'8m',
                    totalpoints: 50
                },
                player8: {
                    name: "Riaz",
                    country:"PAK",
                    value:'15m',
                    totalpoints: -35
                },
                player9: {
                    name: "Umesh",
                    country:"IND",
                    value:'10m',
                    totalpoints: 167
                },
                player10: {
                    name: "Rahane",
                    country:"IND",
                    value:'10m',
                    totalpoints: 0
                },
                player11: {
                    name: "Hales",
                     country:"ENG",
                    value:'17m',
                    totalpoints: 178
                },
                player12: {
                    name: "Cummins",
                    country:"AUS",
                    value:'15m',
                    totalpoints: '-'
                },
                player13: {
                    name: "Behardien",
                   country:"SA",
                    value:'5m',
                    totalpoints: 0
                },
                player14: {
                    name: "K mendis",
                    country:"SL",
                    value:'2m',
                    totalpoints: 30
                },
                player15: {
                    name: "Neesham",
                   country:"NZ",
                    value:'12m',
                    totalpoints: '-'
                }
            }

        },
      
        Adi: {
            name: "Adi",
            players: {
                player1: {
                    name: "Hafeez",
                    country:"PAK",
                    value:'14m',
                    totalpoints: 30
                },
                player2: {
                    name: "Starc",
                    country:"AUS",
                    value:'32m',
                    totalpoints: 0
                },
                player3: {
                    name: "Q DeKock",
                    country:"SA",
                    value:'33m',
                    totalpoints: 26
                },
                player4: {
                    name: "K Perera",
                    country:"SL",
                    value:'5m',
                    totalpoints: 38
                },
                player5: {
                    name: "Mustafizur",
                     country:"BAN",
                    value:'20m',
                    totalpoints: 21
                },
                player6: {
                    name: "Sabbir Rahman",
                    country:"BAN",
                    value:'8m',
                    totalpoints: 68
                },
                player7: {
                    name: "Taskin",
                    country:"BAN",
                    value:'7m',
                    totalpoints: '-'
                },
                player8: {
                    name: "Hasan ali",
                     country:"BAN",
                    value:'5m',
                    totalpoints: 14
                },
                player9: {
                    name: "Lakmal",
                    country:"SL",
                    value:'3m',
                    totalpoints: 42
                },
                player10: {
                    name: "Gunaratne",
                    country:"SL",
                    value:'5m',
                    totalpoints: -4
                },
                player11: {
                    name: "Bumrah",
                   country:"IND",
                    value:'20m',
                    totalpoints: 24
                },
                player12: {
                    name: "Stoinis",
                    country:"AUS",
                    value:'18m',
                    totalpoints: '-'
                },
                player13: {
                    name: "Phehlukwayo",
                   country:"SA",
                    value:'10m',
                    totalpoints: 0
                },
                player14: {
                    name: "Pretorius",
                    country:"SA",
                    value:'7m',
                    totalpoints: 0
                },
                player15: {
                    name: "Hardik",
                    country:"IND",
                    value:'13m',
                    totalpoints: 159
                }
        }
    },
    chatur: {
            name: "Chatur",
            players: {
                player1: {
                    name: "Shakib",
                    country:"PAK",
                    value:'21m',
                    totalpoints: 24
                },
                player2: {
                    name: "Ab deVilliers",
                    country:"SA",
                    value:'36m',
                    totalpoints: 4
                },
                player3: {
                    name: "Mathews",
                    country:"SL",
                    value:'16m',
                    totalpoints: 0
                },
                player4: {
                    name: "Ashwin",
                    country:"IND",
                    value:'15m',
                    totalpoints: 0
                },
                player5: {
                    name: "Musta Rahim",
                    country:"BAN",
                    value:'9m',
                    totalpoints: 130
                },
                player6: {
                    name: "Roy",
                     country:"ENG",
                    value:'19m',
                    totalpoints: 23
                },
                player7: {
                    name: "Head",
                    country:"AUS",
                    value:'6m',
                    totalpoints: '-'
                },
                player8: {
                    name: "Mahmadullah",
                    country:"BAN",
                    value:'5m',
                    totalpoints: 6
                },
                player9: {
                    name: "Santner",
                    country:"NZ",
                    value:'19m',
                    totalpoints: '-'
                },
                player10: {
                    name: "Latham",
                    country:"NZ",
                    value:'11m',
                    totalpoints: '-'
                },
                player11: {
                    name: "Jake ball",
                     country:"ENG", 
                    value:'18m',
                    totalpoints: 28
                },
                player12: {
                    name: "Pradeep",
                    country:"SL",
                    value:'6m',
                    totalpoints: 85
                },
                player13: {
                    name: "Dickwella",
                    country:"SL",
                    value:'4m',
                    totalpoints: 94
                },
                player14: {
                    name: "Yuvraj",
                    country:"IND",
                    value:'14m',
                    totalpoints: 150
                },
                player15: {
                    name: "M Hossain",
                    country:"BAN",
                    value:'1m',
                    totalpoints: -1
                }
        }
    },
    ram: {
            name: "Ram",
            players: {
                player1: {
                    name: "Smith",
                    country:"AUS",
                    value:'29m',
                    totalpoints: '-'
                },
                player2: {
                    name: "Chandimal",
                    country:"SL",
                    value:'8m',
                    totalpoints: 24
                },
                player3: {
                    name: "Finch",
                    country:"AUS",
                    value:'21m',
                    totalpoints: '-'
                },
                player4: {
                    name: "Boult",
                    country:"NZ",
                    value:'10m',
                    totalpoints: '-'
                },
                player5: {
                    name: "Rabada",
                    country:"SA",
                    value:'22m',
                    totalpoints: 54
                },
                player6: {
                    name: "Amir",
                    country:"PAK",
                    value:'12m',
                    totalpoints: 50
                },
                player7: {
                    name: "Kulashekara",
                    country:"SL",
                    value:'12m',
                    totalpoints: 0
                },
                player8: {
                    name: "Shehzad",
                    country:"PAK",
                    value:'8m',
                    totalpoints: 8
                },
                player9: {
                    name: "Bairstow",
                    country:"ENG",
                    value:'6m',
                    totalpoints: 0
                },
                player10: {
                    name: "Hazlewood",
                    country:"AUS",
                    value:'16m',
                    totalpoints: '-'
                },
                player11: {
                    name: "Corey",
                    country:"NZ",
                    value:'18m',
                    totalpoints: '-'
                },
                player12: {
                    name: "Milne",
                    country:"NZ",
                    value:'3m',
                    totalpoints: '-'
                },
                player13: {
                    name: "Tahir",
                    country:"SA",
                    value:'21m',
                    totalpoints: 263
                },
                player14: {
                    name: "Wasim",
                    country:"PAK",
                    value:'7m',
                    totalpoints: -16
                },
                player15: {
                    name: "Kedar",
                    country:"IND",
                    value:'7m',
                    totalpoints: 40
                }
        }
    },
    revanth: {
            name: "Revanth",
            players: {
                player1: {
                    name: "Kohli",
                    country:"IND",
                    value:'36m',
                    totalpoints: 154
                },
                player2: {
                    name: "Maxwell",
                    country:"AUS",
                    value:'33m',
                    totalpoints: '-'
                },
                player3: {
                    name: "Sohail",
                    country:"PAK",
                    value:'5m',
                    totalpoints: 0
                },
                player4: {
                    name: "Lynn",
                    country:"AUS",
                    value:'18m',
                    totalpoints: '-'
                },
                player5: {
                    name: "Tamim iqbal",
                    country:"BAN",
                    value:'11m',
                    totalpoints: 209
                },
                player6: {
                    name: "Dhoni",
                    country:"IND",
                    value:'23m',
                    totalpoints: 25
                },
                player7: {
                    name: "Azam",
                    country: "PAK",
                    value:'20m',
                    totalpoints: 22
                },
                player8: {
                    name: "Kayes",
                    country:"BAN",
                    value:'1m',
                    totalpoints: 22
                },
                player9: {
                    name: "Jeetan Patel",
                    country:"NZ",
                    value:'3m',
                    totalpoints: '-'
                },
                player10: {
                    name: "Junaid khan",
                    country:"PAK",
                    value:'6m',
                    totalpoints: 0
                },
                player11: {
                    name: "Sandakan",
                    country:"SL",
                    value:'9m',
                    totalpoints: 0
                },
                player12: {
                    name: "Finn(woakes)",
                    country:"ENG",
                    value:'21m',
                    totalpoints: 36
                },
                player13: {
                    name: "Zampa",
                    country:"AUS",
                    value:'12m',
                    totalpoints: '-'
                },
                player14: {
                    name: "Maharaj",
                    country:"SA",
                    value:'1m',
                    totalpoints: 0
                },
                player15: {
                    name: "Mehedi Hasan",
                    country:"BAN",
                    value:'1m',
                    totalpoints: 13
                }
        }
    },

    vatsav: {
            name: "Vatsav",
            players: {
                player1: {
                    name: "Guptill",
                    country:"NZ",
                    value:'16m',
                    totalpoints: '-'
                },
                player2: {
                    name: "Malik",
                    country:"PAK",
                    value:'20m',
                    totalpoints: 35
                },
                player3: {
                    name: "Morris",
                    country:"SA",
                    value:'24m',
                    totalpoints: 125
                },
                player4: {
                    name: "Moeen",
                    country:"ENG",
                    value:'19m',
                    totalpoints: 36
                },
                player5: {
                    name: "Butler",
                     country:"ENG",
                    value:'16m',
                    totalpoints: 25
                },
                player6: {
                    name: "Pattinson",
                    country:"AUS",
                    value:'7m',
                    totalpoints: '-'
                },
                player7: {
                    name: "Miller",
                    country:"SA",
                    value:'28m',
                    totalpoints: 44
                },
                player8: {
                    name: "Duminy",
                    country:"SA",
                    value:'20m',
                    totalpoints: 116
                },
                player9: {
                    name: "Parnell",
                    country:"SA",
                    value:'15m',
                    totalpoints: 59
                },
                player10: {
                    name: "Tharanga",
                    country:"SL",
                    value:'8m',
                    totalpoints: 82
                },
                player11: {
                    name: "Fahim",
                    country:"PAK",
                    value:'1m',
                    totalpoints: 0
                },
                player12: {
                    name: "Shami",
                    country:"IND",
                    value:'10m',
                    totalpoints: 0
                },
                player13: {
                    name: "Shafiul",
                     country:"BAN",
                    value:'1m',
                    totalpoints: 0
                },
                player14: {
                    name: "Sunzamul",
                     country:"BAN",
                    value:'1m',
                    totalpoints: 0
                },
                player15: {
                    name: "Shadab",
                    country:"PAK",
                    value:'14m',
                    totalpoints: 62
                }
        }
    },
    vikas: {
            name: "Vikas",
            players: {
                player1: {
                    name: "Amla",
                    country:"SA",
                    value:'35m',
                    totalpoints: 161
                },
                player2: {
                    name: "F du Plesis",
                    country:"SA",
                    value:'25m',
                    totalpoints: 126
                },
                player3: {
                    name: "Jadeja",
                    country:"IND",
                    value:'14m',
                    totalpoints: 120
                },
                player4: {
                    name: "Mortaza",
                     country:"BAN",
                    value:'14m',
                    totalpoints: 38
                },
                player5: {
                    name: "Southee",
                    country:"NZ",
                    value:'10m',
                    totalpoints: '-'
                },
                player6: {
                    name: "Mclenaghan",
                    country:"NZ",
                    value:'14m',
                    totalpoints: '-'
                },
                player7: {
                    name: "Morgan",
                     country:"ENG",
                    value:'25m',
                    totalpoints: 150
                },
                player8: {
                    name: "Billings",
                     country:"ENG",
                    value:'5m',
                    totalpoints: 0
                },
                player9: {
                    name: "Ronchi",
                    country:"NZ",
                    value:'15m',
                    totalpoints: '-'
                },
                player10: {
                    name: "Dinesh",
                    country:"IND",
                    value:'2m',
                    totalpoints: 0
                },
                player11: {
                    name: "Dhawan",
                    country:"IND",
                    value:'14m',
                    totalpoints: 117
                },
                player12: {
                    name: "Plunkett",
                     country:"ENG",
                    value:'13m',
                    totalpoints: 177
                },
                player13: {
                    name: "Wade",
                    country:"AUS",
                    value:'6m',
                    totalpoints: '-'
                },
                player14: {
                    name: "Kapugedara",
                    country:"SL",
                    value:'1m',
                    totalpoints: 10
                },
                player15: {
                    name: "Wood",
                     country:"ENG",
                    value:'7m',
                    totalpoints: 39
                }
        }
    },
    vinod: {
            name: "Vinod",
            players: {
                player1: {
                    name: "Stokes",
                    country:"ENG",
                    value:'36m',
                    totalpoints: 55
                },
                player2: {
                    name: "Root",
                    country:"ENG",
                    value:'30m',
                    totalpoints: 259
                },
                player3: {
                    name: "Rohit",
                    country:"IND",
                    value:'21m',
                    totalpoints: 123
                },
                player4: {
                    name: "Sarfaraz",
                    country:"PAK",
                    value:'14m',
                    totalpoints: 32
                },
                player5: {
                    name: "Bhuvi",
                    country:"IND",
                    value:'25m',
                    totalpoints: 79
                },
                player6: {
                    name: "Henriques",
                    country:"AUS",
                    value:'4m',
                    totalpoints: '-'
                },
                player7: {
                    name: "Sarkar",
                     country:"BAN",
                    value:'3m',
                    totalpoints: 30
                },
                player8: {
                    name: "R Hossain",
                    country:"BAN",
                    value:'2m',
                    totalpoints: -4
                },
                player9: {
                    name: "Broom",
                    country:"NZ",
                    value:'3m',
                    totalpoints: '-'
                },
                player10: {
                    name: "Prassana",
                    country:"SL",
                    value:'2m',
                    totalpoints: 45
                },
                player11: {
                    name: "Willey",
                    country:"ENG",
                    value:'7m',
                    totalpoints: 0
                },
                player12: {
                    name: "Rashid",
                    country:"ENG",
                    value:'13m',
                    totalpoints: 0
                },
                player13: {
                    name: "Hastings",
                    country:"AUS",
                    value:'27m',
                    totalpoints: '-'
                },
                player14: {
                    name: "Grandhomme",
                    country:"NZ",
                    value:'10m',
                    totalpoints: '-'
                },
                player15: {
                    name: "Fakhar Zaman",
                    country:"PAK",
                    value:'3m',
                    totalpoints: 0
                },
                
        }
    }
};

$scope.totalScore = function(participant){
    var score = 0;
   
    var obj = Object.values(participant.players);
    var len =Object.values(participant.players).length
    
   for(var i = 0;i<len;i++){
        if(!angular.equals(obj[i].totalpoints, '-')){
            
            score =score+parseFloat(obj[i].totalpoints);
           
        }
        
    }
    participant['total']=score;
    return score;
};
    


$scope.teamScores = [];

$scope.showRankings = function(){
 
    $scope.showrank = true; 
   
   
    
    angular.forEach ($scope.allParticipants, function(participant, key){

     $scope.teamScores.push(participant);

       
   });
    
};

$scope.hideRankings = function(){
   
    $scope.showrank = false; 
   
    
};


    
    

 }]);   

