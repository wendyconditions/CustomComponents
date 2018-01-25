(function () {
    "use strict";

    angular.module('myApp', ['ui.bootstrap'])
        .controller('AppCtrl', function ($scope) {
            /////

            $scope.roles = {
                "CustomerID": 0,
                "TitleID": null,
                "TitleKey": 266,
                "Roles": [
                    {
                        "RoleID": 3,
                        "Role": "Interviewer",
                        "SortOrder": null,
                        "Entities": [
                            {
                                "TitleEntityID": 1543,
                                "ObjectTableID": "AR_Person",
                                "ObjectID": 43,
                                "Name": "Debbie Neel Ackerman"
                            },
                            {
                                "TitleEntityID": 1534,
                                "ObjectTableID": "AR_Organization",
                                "ObjectID": 670,
                                "Name": "The Shoah Foundation and HBO Network"
                            }
                        ]
                    },
                    {
                        "RoleID": 4,
                        "Role": "Copyright",
                        "SortOrder": null,
                        "Entities": [
                            {
                                "TitleEntityID": 1538,
                                "ObjectTableID": "AR_Person",
                                "ObjectID": 68,
                                "Name": " Mills Overland"
                            },
                            {
                                "TitleEntityID": 1547,
                                "ObjectTableID": "AR_Person",
                                "ObjectID": 66,
                                "Name": "Joe Smith"
                            }
                        ]
                    },
                    {
                        "RoleID": 10,
                        "Role": "Boom Operator",
                        "SortOrder": null,
                        "Entities": [
                            {
                                "TitleEntityID": 1533,
                                "ObjectTableID": "AR_Person",
                                "ObjectID": 70,
                                "Name": "Wendy Maldonado"
                            },
                            {
                                "TitleEntityID": 1534,
                                "ObjectTableID": "AR_Organization",
                                "ObjectID": 670,
                                "Name": "A Community of Friends in the Los Angeles area"
                            },
                            {
                                "TitleEntityID": 1538,
                                "ObjectTableID": "AR_Person",
                                "ObjectID": 68,
                                "Name": " Mills Overland"
                            },
                            {
                                "TitleEntityID": 1538,
                                "ObjectTableID": "AR_Person",
                                "ObjectID": 68,
                                "Name": " A Community of Friends in the Los Angeles area"
                            },
                            {
                                "TitleEntityID": 1538,
                                "ObjectTableID": "AR_Person",
                                "ObjectID": 68,
                                "Name": " Mills Overland"
                            },
                            {
                                "TitleEntityID": 1538,
                                "ObjectTableID": "AR_Person",
                                "ObjectID": 68,
                                "Name": " A Community of Friends in the Los Angeles area"
                            },
                        ]
                    }
                ]
            }

        })

        .component("userAvatar", {
            templateUrl: "avatar.html",
            bindings: {
                "data": "<"
            }
        });

})();

