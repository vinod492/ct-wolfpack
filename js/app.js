var myApp = angular.module('myApp', []);

myApp.controller('myController', ['$scope', function ($scope) {
    $scope.greeting = 'Hola!';

    $scope.allParticipants = {
        aanand: {
            name: "Anand",
            players: {
                player1: {
                    name: "Warner",
                    value:'35m',
                    totalpoints: '-'
                },
                player2: {
                    name: "Willimson",
                    value:'30m',
                    totalpoints: '-'
                },
                player3: {
                    name: "Malinga",
                    value:'13m',
                    totalpoints: '-'
                },
                player4: {
                    name: "Thisara",
                    value:'5m',
                    totalpoints: '-'
                },
                player5: {
                    name: "Azhar ali",
                    value:'5m',
                    totalpoints: '-'
                },
                player6: {
                    name: "Ross taylor",
                    value:'10m',
                    totalpoints: '-'
                },
                player7: {
                    name: "Morne",
                    value:'8m',
                    totalpoints: '-'
                },
                player8: {
                    name: "Riaz",
                    value:'15m',
                    totalpoints: '-'
                },
                player9: {
                    name: "Umesh",
                    value:'10m',
                    totalpoints: '-'
                },
                player10: {
                    name: "Rahane",
                    value:'10m',
                    totalpoints: '-'
                },
                player11: {
                    name: "Hales",
                    value:'17m',
                    totalpoints: '-'
                },
                player12: {
                    name: "Cummins",
                    value:'15m',
                    totalpoints: '-'
                },
                player13: {
                    name: "Behardien",
                    value:'5m',
                    totalpoints: '-'
                },
                player14: {
                    name: "K mendis",
                    value:'2m',
                    totalpoints: '-'
                },
                player15: {
                    name: "Neesham",
                    value:'12m',
                    totalpoints: '-'
                },
            },
        
                total: $scope.totalPoints($scope.aanand.players),
        },
      
        adi: {
            name: "adi",
            players: {
                player1: {
                    name: "Hafeez",
                    value:'14m',
                    totalpoints: '-'
                },
                player2: {
                    name: "Starc",
                    value:'32m',
                    totalpoints: '-'
                },
                player3: {
                    name: "DeKock",
                    value:'33m',
                    totalpoints: '-'
                },
                player4: {
                    name: "K Perera",
                    value:'5m',
                    totalpoints: '-'
                },
                player5: {
                    name: "Mustafizur",
                    value:'20m',
                    totalpoints: '-'
                },
                player6: {
                    name: "Sabbir",
                    value:'8m',
                    totalpoints: '-'
                },
                player7: {
                    name: "Taskin",
                    country: "pak",
                    value:'7m',
                    totalpoints: '-'
                },
                player8: {
                    name: "Hasan ali",
                    value:'5m',
                    totalpoints: '-'
                },
                player9: {
                    name: "Lakmal",
                    value:'3m',
                    totalpoints: '-'
                },
                player10: {
                    name: "Gunaratne",
                    value:'5m',
                    totalpoints: '-'
                },
                player11: {
                    name: "Bumrah",
                    value:'20m',
                    totalpoints: '-'
                },
                player12: {
                    name: "Stoinis",
                    value:'18m',
                    totalpoints: '-'
                },
                player13: {
                    name: "Phehlukwayo",
                    value:'10m',
                    totalpoints: '-'
                },
                player14: {
                    name: "Pretorius",
                    value:'7m',
                    totalpoints: '-'
                },
                player15: {
                    name: "Hardik",
                    value:'13m',
                    totalpoints: '-'
                },
        }
    },
    chatur: {
            name: "Chatur",
            players: {
                player1: {
                    name: "Shakib",
                    value:'21m',
                    totalpoints: '-'
                },
                player2: {
                    name: "Ab deVilliers",
                    value:'36m',
                    totalpoints: '-'
                },
                player3: {
                    name: "Mathews",
                    value:'16m',
                    totalpoints: '-'
                },
                player4: {
                    name: "Ashwin",
                    value:'15m',
                    totalpoints: '-'
                },
                player5: {
                    name: "Rahim",
                    value:'9m',
                    totalpoints: '-'
                },
                player6: {
                    name: "Roy",
                    value:'19m',
                    totalpoints: '-'
                },
                player7: {
                    name: "Head",
                    value:'6m',
                    totalpoints: '-'
                },
                player8: {
                    name: "Mahmadullah",
                    value:'5m',
                    totalpoints: '-'
                },
                player9: {
                    name: "Santner",
                    value:'19m',
                    totalpoints: '-'
                },
                player10: {
                    name: "Latham",
                    value:'11m',
                    totalpoints: '-'
                },
                player11: {
                    name: "Jake ball",
                    value:'18m',
                    totalpoints: '-'
                },
                player12: {
                    name: "Pradeep",
                    value:'6m',
                    totalpoints: '-'
                },
                player13: {
                    name: "Dickwella",
                    value:'4m',
                    totalpoints: '-'
                },
                player14: {
                    name: "Yuvraj",
                    value:'14m',
                    totalpoints: '-'
                },
                player15: {
                    name: "Mosaddek",
                    value:'1m',
                    totalpoints: '-'
                },
        }
    },
    ram: {
            name: "Ram",
            players: {
                player1: {
                    name: "Smith",
                    value:'29m',
                    totalpoints: '-'
                },
                player2: {
                    name: "Chandimal",
                    value:'8m',
                    totalpoints: '-'
                },
                player3: {
                    name: "Finch",
                    value:'21m',
                    totalpoints: '-'
                },
                player4: {
                    name: "Boult",
                    value:'10m',
                    totalpoints: '-'
                },
                player5: {
                    name: "Rabada",
                    value:'22m',
                    totalpoints: '-'
                },
                player6: {
                    name: "Amir",
                    value:'12m',
                    totalpoints: '-'
                },
                player7: {
                    name: "Kulashekara",
                    value:'12m',
                    totalpoints: '-'
                },
                player8: {
                    name: "Shezad",
                    value:'8m',
                    totalpoints: '-'
                },
                player9: {
                    name: "Bairstow",
                    value:'6m',
                    totalpoints: '-'
                },
                player10: {
                    name: "Hazlewood",
                    value:'16m',
                    totalpoints: '-'
                },
                player11: {
                    name: "Corey",
                    value:'18m',
                    totalpoints: '-'
                },
                player12: {
                    name: "Milne",
                    value:'3m',
                    totalpoints: '-'
                },
                player13: {
                    name: "Tahir",
                    value:'21m',
                    totalpoints: '-'
                },
                player14: {
                    name: "Wasim",
                    value:'7m',
                    totalpoints: '-'
                },
                player15: {
                    name: "Kedar",
                    value:'7m',
                    totalpoints: '-'
                },
        }
    },
    revanth: {
            name: "Revanth",
            players: {
                player1: {
                    name: "Kohli",
                    value:'36m',
                    totalpoints: '-'
                },
                player2: {
                    name: "Maxwell",
                    value:'33m',
                    totalpoints: '-'
                },
                player3: {
                    name: "Sohail",
                    value:'5m',
                    totalpoints: '-'
                },
                player4: {
                    name: "Lynn",
                    value:'18m',
                    totalpoints: '-'
                },
                player5: {
                    name: "Tamim",
                    value:'11m',
                    totalpoints: '-'
                },
                player6: {
                    name: "Dhoni",
                    value:'23m',
                    totalpoints: '-'
                },
                player7: {
                    name: "Azam",
                    country: "pak",
                    value:'20m',
                    totalpoints: '-'
                },
                player8: {
                    name: "Kayes",
                    value:'1m',
                    totalpoints: '-'
                },
                player9: {
                    name: "Jeetan",
                    value:'3m',
                    totalpoints: '-'
                },
                player10: {
                    name: "Junaid",
                    value:'6m',
                    totalpoints: '-'
                },
                player11: {
                    name: "Sandakan",
                    value:'9m',
                    totalpoints: '-'
                },
                player12: {
                    name: "Woakes",
                    value:'21m',
                    totalpoints: '-'
                },
                player13: {
                    name: "Zampa",
                    value:'12m',
                    totalpoints: '-'
                },
                player14: {
                    name: "Maharaj",
                    value:'1m',
                    totalpoints: '-'
                },
                player15: {
                    name: "Mehedi",
                    value:'1m',
                    totalpoints: '-'
                },
        }
    },

    vatsav: {
            name: "Vatsav",
            players: {
                player1: {
                    name: "Guptill",
                    value:'16m',
                    totalpoints: '-'
                },
                player2: {
                    name: "Malik",
                    value:'20m',
                    totalpoints: '-'
                },
                player3: {
                    name: "Morris",
                    value:'24m',
                    totalpoints: '-'
                },
                player4: {
                    name: "Moeen",
                    value:'19m',
                    totalpoints: '-'
                },
                player5: {
                    name: "Butler",
                    value:'16m',
                    totalpoints: '-'
                },
                player6: {
                    name: "Pattinson",
                    value:'7m',
                    totalpoints: '-'
                },
                player7: {
                    name: "Miller",
                    value:'28m',
                    totalpoints: '-'
                },
                player8: {
                    name: "Duminy",
                    value:'20m',
                    totalpoints: '-'
                },
                player9: {
                    name: "Parnell",
                    value:'15m',
                    totalpoints: '-'
                },
                player10: {
                    name: "Tharanga",
                    value:'8m',
                    totalpoints: '-'
                },
                player11: {
                    name: "Fahim",
                    value:'1m',
                    totalpoints: '-'
                },
                player12: {
                    name: "Shami",
                    value:'10m',
                    totalpoints: '-'
                },
                player13: {
                    name: "Shafiul",
                    value:'1m',
                    totalpoints: '-'
                },
                player14: {
                    name: "Sunzamul",
                    value:'1m',
                    totalpoints: '-'
                },
                player15: {
                    name: "Shadab",
                    value:'14m',
                    totalpoints: '-'
                },
        }
    },
    vikas: {
            name: "Vikas",
            players: {
                player1: {
                    name: "Amla",
                    value:'35m',
                    totalpoints: '-'
                },
                player2: {
                    name: "Faf",
                    value:'25m',
                    totalpoints: '-'
                },
                player3: {
                    name: "Jaddu",
                    value:'14m',
                    totalpoints: '-'
                },
                player4: {
                    name: "Mortaza",
                    value:'14m',
                    totalpoints: '-'
                },
                player5: {
                    name: "Southee",
                    value:'10m',
                    totalpoints: '-'
                },
                player6: {
                    name: "Mclenagan",
                    value:'14m',
                    totalpoints: '-'
                },
                player7: {
                    name: "Morgan",
                    value:'25m',
                    totalpoints: '-'
                },
                player8: {
                    name: "Billings",
                    value:'5m',
                    totalpoints: '-'
                },
                player9: {
                    name: "Ronchi",
                    value:'15m',
                    totalpoints: '-'
                },
                player10: {
                    name: "Dinesh",
                    value:'2m',
                    totalpoints: '-'
                },
                player11: {
                    name: "Dhawan",
                    value:'14m',
                    totalpoints: '-'
                },
                player12: {
                    name: "Plunkett",
                    value:'13m',
                    totalpoints: '-'
                },
                player13: {
                    name: "Wade",
                    value:'6m',
                    totalpoints: '-'
                },
                player14: {
                    name: "Kapugedara",
                    value:'1m',
                    totalpoints: '-'
                },
                player15: {
                    name: "Wood",
                    value:'7m',
                    totalpoints: '-'
                },
        }
    },
    vinod: {
            name: "Vinod",
            players: {
                player1: {
                    name: "Stokes",
                    value:'36m',
                    totalpoints: '-'
                },
                player2: {
                    name: "Root",
                    value:'30m',
                    totalpoints: '-'
                },
                player3: {
                    name: "Rohit",
                    value:'21m',
                    totalpoints: '-'
                },
                player4: {
                    name: "Sarfaraz",
                    value:'14m',
                    totalpoints: '-'
                },
                player5: {
                    name: "Bhuvi",
                    value:'25m',
                    totalpoints: '-'
                },
                player6: {
                    name: "Henriques",
                    value:'4m',
                    totalpoints: '-'
                },
                player7: {
                    name: "Sarkar",
                    value:'3m',
                    totalpoints: '-'
                },
                player8: {
                    name: "Rubel",
                    value:'2m',
                    totalpoints: '-'
                },
                player9: {
                    name: "Broom",
                    value:'3m',
                    totalpoints: '-'
                },
                player10: {
                    name: "Sekkuge",
                    value:'2m',
                    totalpoints: '-'
                },
                player11: {
                    name: "Wiley",
                    value:'7m',
                    totalpoints: '-'
                },
                player12: {
                    name: "Rashid",
                    value:'13m',
                    totalpoints: '-'
                },
                player13: {
                    name: "Hastings",
                    value:'27m',
                    totalpoints: '-'
                },
                player14: {
                    name: "Grandhomme",
                    value:'10m',
                    totalpoints: '-'
                },
                player15: {
                    name: "Fakhar",
                    value:'3m',
                    totalpoints: '-'
                },
        }
    },
};

$scope.totalPoints = function(){

 return 'hello';   
};
}]);