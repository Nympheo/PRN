


 const userDataBase = [{
                            email: 'kumastakurt@mail.ru',
                            password: 'Polypass1',
                            name: 'Журавкин Дмитрий',
                            polyclinic: '22',
                            online: false,
                            prof: 'хирург',
                            bio: '',
                            avaImage: {},
                            work: [{
                                      date: new Date('1.1.2000'),
                                      data: {
                                        count: 125,
                                        adults: 28,
                                        children: 5,
                                        mens: 70,
                                        womans: 55,
                                        disease: 90,
                                        nodisease: 35,
                                        invalids: 6,
                                        veterans: 1,
                                        doctors: 2
                                      }
                                    },
                                    {
                                      date: new Date('1.2.2000'),
                                      data: {
                                        count: 125,
                                        adults: 28,
                                        children: 5,
                                        mens: 70,
                                        womans: 55,
                                        disease: 90,
                                        nodisease: 35,
                                        invalids: 6,
                                        veterans: 1,
                                        doctors: 2
                                      }
                                    },
                          ]
                      },
                      {
                            email: 'anton@mail.ru',
                            password: 'Anton1',
                            name: 'Иванов Антон',
                            polyclinic: '22',
                            online: false,
                            prof: 'лор',
                            bio: '',
                            avaImage: {}
                      },
                      {
                            email: 'sveta@mail.ru',
                            password: 'Vadim1',
                            name: 'Зорина Светлана',
                            polyclinic: '22',
                            online: false,
                            prof: '',
                            bio: '',
                            avaImage: {}
                      },
                      {
                            email: 'zina@mail.ru',
                            password: 'Vadim1',
                            name: 'Юрко Зинаида',
                            polyclinic: '22',
                            online: false,
                            prof: '',
                            bio: '',
                            avaImage: {}
                      },
                      {
                            email: 'vadim@mail.ru',
                            password: 'Vadim1',
                            name: 'Орехов Вадим',
                            polyclinic: '22',
                            online: false,
                            prof: '',
                            bio: '',
                            avaImage: {}
                      },
                      {
                            email: 'valera@mail.ru',
                            password: 'Vadim1',
                            name: 'Кульбицкий Валера',
                            polyclinic: '22',
                            online: false,
                            prof: '',
                            bio: '',
                            avaImage: {}
                      },
                      {
                            email: 'amos@mail.ru',
                            password: 'Vadim1',
                            name: 'Амосов Андрей',
                            polyclinic: '22',
                            online: false,
                            prof: '',
                            bio: '',
                            avaImage: {}
                      },
                      {
                            email: 'vitja@mail.ru',
                            password: 'Vadim1',
                            name: 'Андреенко Виктор',
                            polyclinic: '22',
                            online: false,
                            prof: '',
                            bio: '',
                            avaImage: {}
                      },
                      {
                            email: 'ehya@mail.ru',
                            password: 'Vadim1',
                            name: 'Орехова Евгения',
                            polyclinic: '22',
                            online: false,
                            prof: '',
                            bio: '',
                            avaImage: {}
                      }

];//if you insert new properties in this database do it also in register component

module.exports = userDataBase;
