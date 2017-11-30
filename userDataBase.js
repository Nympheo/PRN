


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
                                      date: new Date('1.1.2016'),
                                      data: {
                                        count: 125, adults: 100, children: 25, mens: 70,
                                        womans: 55, disease: 90, nodisease: 35,
                                        invalids: 6,veterans: 1,doctors: 2
                                      }
                                    },
                                    {
                                      date: new Date('2.1.2016'),
                                      data: {
                                        count: 115, adults: 98, children: 17, mens: 60,
                                        womans: 55, disease: 80, nodisease: 35,
                                        invalids: 6, veterans: 0, doctors: 5
                                      }
                                    },
                                    {
                                      date: new Date('3.1.2016'),
                                      data: {
                                        count: 105, adults: 93, children: 12, mens: 55,
                                        womans: 50, disease: 70, nodisease: 35,
                                        invalids: 8, veterans: 3, doctors: 6
                                      }
                                    },
                                    {
                                      date: new Date('4.1.2016'),
                                      data: {
                                        count: 100, adults: 89, children: 11, mens: 45,
                                        womans: 55, disease: 75, nodisease: 25,
                                        invalids: 6, veterans: 0, doctors: 5
                                      }
                                    },
                                    {
                                      date: new Date('5.1.2016'),
                                      data: {
                                        count: 85, adults: 60, children: 15, mens: 45,
                                        womans: 35, disease: 75, nodisease: 10,
                                        invalids: 4, veterans: 1, doctors: 3
                                      }
                                    },
                                    {
                                      date: new Date('6.1.2016'),
                                      data: {
                                        count: 80, adults: 65, children: 15, mens: 40,
                                        womans: 40, disease: 75, nodisease: 5,
                                        invalids: 2, veterans: 0, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('7.1.2016'),
                                      data: {
                                        count: 84, adults: 61, children: 23, mens: 44,
                                        womans: 40, disease: 60, nodisease: 24,
                                        invalids: 3, veterans: 1, doctors: 1
                                      }
                                    },
                                    {
                                      date: new Date('8.1.2016'),
                                      data: {
                                        count: 73, adults: 63, children: 10, mens: 28,
                                        womans: 45, disease: 68, nodisease: 5,
                                        invalids: 1, veterans: 0, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('9.1.2016'),
                                      data: {
                                        count: 92, adults: 80, children: 12, mens: 45,
                                        womans: 47, disease: 85, nodisease: 7,
                                        invalids: 2, veterans: 1, doctors: 2
                                      }
                                    },
                                    {
                                      date: new Date('10.1.2016'),
                                      data: {
                                        count: 110, adults: 90, children: 20, mens: 60,
                                        womans: 50, disease: 100, nodisease: 10,
                                        invalids: 6, veterans: 4, doctors: 4
                                      }
                                    },
                                    {
                                      date: new Date('11.1.2016'),
                                      data: {
                                        count: 120, adults: 98, children: 22, mens: 60,
                                        womans: 60, disease: 110, nodisease: 10,
                                        invalids: 7, veterans: 3, doctors: 5
                                      }
                                    },
                                    {
                                      date: new Date('12.1.2016'),
                                      data: {
                                        count: 123, adults: 108, children: 15, mens: 58,
                                        womans: 65, disease: 111, nodisease: 12,
                                        invalids: 5, veterans: 2, doctors: 3
                                      }
                                    },
                                    {
                                      date: new Date('1.1.2017'),
                                      data: {
                                        count: 125, adults: 100, children: 25, mens: 70,
                                        womans: 55, disease: 90, nodisease: 35,
                                        invalids: 6,veterans: 1,doctors: 2
                                      }
                                    },
                                    {
                                      date: new Date('2.1.2017'),
                                      data: {
                                        count: 115, adults: 98, children: 17, mens: 60,
                                        womans: 55, disease: 80, nodisease: 35,
                                        invalids: 6, veterans: 0, doctors: 5
                                      }
                                    },
                                    {
                                      date: new Date('3.1.2017'),
                                      data: {
                                        count: 105, adults: 93, children: 12, mens: 55,
                                        womans: 50, disease: 70, nodisease: 35,
                                        invalids: 8, veterans: 3, doctors: 6
                                      }
                                    },
                                    {
                                      date: new Date('4.1.2017'),
                                      data: {
                                        count: 100, adults: 89, children: 11, mens: 45,
                                        womans: 55, disease: 75, nodisease: 25,
                                        invalids: 6, veterans: 0, doctors: 5
                                      }
                                    },
                                    {
                                      date: new Date('5.1.2017'),
                                      data: {
                                        count: 85, adults: 60, children: 15, mens: 45,
                                        womans: 35, disease: 75, nodisease: 10,
                                        invalids: 4, veterans: 1, doctors: 3
                                      }
                                    },
                                    {
                                      date: new Date('6.1.2017'),
                                      data: {
                                        count: 80, adults: 65, children: 15, mens: 40,
                                        womans: 40, disease: 75, nodisease: 5,
                                        invalids: 2, veterans: 0, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('7.1.2017'),
                                      data: {
                                        count: 84, adults: 61, children: 23, mens: 44,
                                        womans: 40, disease: 60, nodisease: 24,
                                        invalids: 3, veterans: 1, doctors: 1
                                      }
                                    },
                                    {
                                      date: new Date('8.1.2017'),
                                      data: {
                                        count: 73, adults: 63, children: 10, mens: 28,
                                        womans: 45, disease: 68, nodisease: 5,
                                        invalids: 1, veterans: 0, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('9.1.2017'),
                                      data: {
                                        count: 92, adults: 80, children: 12, mens: 45,
                                        womans: 47, disease: 85, nodisease: 7,
                                        invalids: 2, veterans: 1, doctors: 2
                                      }
                                    },
                                    {
                                      date: new Date('10.1.2017'),
                                      data: {
                                        count: 110, adults: 90, children: 20, mens: 60,
                                        womans: 50, disease: 100, nodisease: 10,
                                        invalids: 6, veterans: 4, doctors: 4
                                      }
                                    },
                                    {
                                      date: new Date('11.1.2017'),
                                      data: {
                                        count: 120, adults: 98, children: 22, mens: 60,
                                        womans: 60, disease: 110, nodisease: 10,
                                        invalids: 7, veterans: 3, doctors: 5
                                      }
                                    },
                                    {
                                      date: new Date('12.1.2017'),
                                      data: {
                                        count: 123, adults: 108, children: 15, mens: 58,
                                        womans: 65, disease: 111, nodisease: 12,
                                        invalids: 5, veterans: 2, doctors: 3
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
                            avaImage: {},
                            work: [
                                    {
                                      date: new Date('1.1.2016'),
                                      data: {
                                        count: 155, adults: 115, children: 35, mens: 70,
                                        womans: 85, disease: 135, nodisease: 20,
                                        invalids: 8, veterans: 2, doctors: 5
                                      }
                                    },
                                    {
                                      date: new Date('2.1.2016'),
                                      data: {
                                        count: 150, adults: 120, children: 30, mens: 80,
                                        womans: 70, disease: 135, nodisease: 15,
                                        invalids: 6, veterans: 3, doctors: 4
                                      }
                                    },
                                    {
                                      date: new Date('3.1.2016'),
                                      data: {
                                        count: 130, adults: 99, children: 31, mens: 65,
                                        womans: 65, disease: 115, nodisease: 15,
                                        invalids: 5, veterans: 1, doctors: 2
                                      }
                                    },
                                    {
                                      date: new Date('4.1.2016'),
                                      data: {
                                        count: 120, adults: 100, children: 20, mens: 55,
                                        womans: 65, disease: 100, nodisease: 20,
                                        invalids: 4, veterans: 1, doctors: 2
                                      }
                                    },
                                    {
                                      date: new Date('5.1.2016'),
                                      data: {
                                        count: 95, adults: 85, children: 10, mens: 45,
                                        womans: 45, disease: 75, nodisease: 20,
                                        invalids: 2, veterans: 0, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('6.1.2016'),
                                      data: {
                                        count: 90, adults: 75, children: 15, mens: 40,
                                        womans: 60, disease: 75, nodisease: 15,
                                        invalids: 3, veterans: 1, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('7.1.2016'),
                                      data: {
                                        count: 84, adults: 61, children: 23, mens: 44,
                                        womans: 40, disease: 60, nodisease: 24,
                                        invalids: 3, veterans: 1, doctors: 1
                                      }
                                    },
                                    {
                                      date: new Date('8.1.2016'),
                                      data: {
                                        count: 73, adults: 63, children: 10, mens: 28,
                                        womans: 45, disease: 68, nodisease: 5,
                                        invalids: 1, veterans: 0, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('9.1.2016'),
                                      data: {
                                        count: 102, adults: 90, children: 12, mens: 55,
                                        womans: 47, disease: 85, nodisease: 7,
                                        invalids: 3, veterans: 1, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('10.1.2016'),
                                      data: {
                                        count: 130, adults: 105, children: 25, mens: 70,
                                        womans: 60, disease: 110, nodisease: 20,
                                        invalids: 7, veterans: 3, doctors: 3
                                      }
                                    },
                                    {
                                      date: new Date('11.1.2016'),
                                      data: {
                                        count: 145, adults: 120, children: 25, mens: 70,
                                        womans: 75, disease: 127, nodisease: 18,
                                        invalids: 8, veterans: 6, doctors: 5
                                      }
                                    },
                                    {
                                      date: new Date('12.1.2016'),
                                      data: {
                                        count: 153, adults: 130, children: 23, mens: 78,
                                        womans: 75, disease: 131, nodisease: 22,
                                        invalids: 5, veterans: 3, doctors: 4
                                      }
                                    },
                                    {
                                      date: new Date('1.1.2017'),
                                      data: {
                                        count: 155, adults: 115, children: 35, mens: 70,
                                        womans: 85, disease: 135, nodisease: 20,
                                        invalids: 8, veterans: 2, doctors: 5
                                      }
                                    },
                                    {
                                      date: new Date('2.1.2017'),
                                      data: {
                                        count: 150, adults: 120, children: 30, mens: 80,
                                        womans: 70, disease: 135, nodisease: 15,
                                        invalids: 6, veterans: 3, doctors: 4
                                      }
                                    },
                                    {
                                      date: new Date('3.1.2017'),
                                      data: {
                                        count: 130, adults: 99, children: 31, mens: 65,
                                        womans: 65, disease: 115, nodisease: 15,
                                        invalids: 5, veterans: 1, doctors: 2
                                      }
                                    },
                                    {
                                      date: new Date('4.1.2017'),
                                      data: {
                                        count: 120, adults: 100, children: 20, mens: 55,
                                        womans: 65, disease: 100, nodisease: 20,
                                        invalids: 4, veterans: 1, doctors: 2
                                      }
                                    },
                                    {
                                      date: new Date('5.1.2017'),
                                      data: {
                                        count: 95, adults: 85, children: 10, mens: 45,
                                        womans: 45, disease: 75, nodisease: 20,
                                        invalids: 2, veterans: 0, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('6.1.2017'),
                                      data: {
                                        count: 90, adults: 75, children: 15, mens: 40,
                                        womans: 60, disease: 75, nodisease: 15,
                                        invalids: 3, veterans: 1, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('7.1.2017'),
                                      data: {
                                        count: 84, adults: 61, children: 23, mens: 44,
                                        womans: 40, disease: 60, nodisease: 24,
                                        invalids: 3, veterans: 1, doctors: 1
                                      }
                                    },
                                    {
                                      date: new Date('8.1.2017'),
                                      data: {
                                        count: 73, adults: 63, children: 10, mens: 28,
                                        womans: 45, disease: 68, nodisease: 5,
                                        invalids: 1, veterans: 0, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('9.1.2017'),
                                      data: {
                                        count: 102, adults: 90, children: 12, mens: 55,
                                        womans: 47, disease: 85, nodisease: 7,
                                        invalids: 3, veterans: 1, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('10.1.2017'),
                                      data: {
                                        count: 130, adults: 105, children: 25, mens: 70,
                                        womans: 60, disease: 110, nodisease: 20,
                                        invalids: 7, veterans: 3, doctors: 3
                                      }
                                    },
                                    {
                                      date: new Date('11.1.2017'),
                                      data: {
                                        count: 145, adults: 120, children: 25, mens: 70,
                                        womans: 75, disease: 127, nodisease: 18,
                                        invalids: 8, veterans: 6, doctors: 5
                                      }
                                    },
                                    {
                                      date: new Date('12.1.2017'),
                                      data: {
                                        count: 153, adults: 130, children: 23, mens: 78,
                                        womans: 75, disease: 131, nodisease: 22,
                                        invalids: 5, veterans: 3, doctors: 4
                                      }
                                    },
                          ]
                      },
                      {
                            email: 'sveta@mail.ru',
                            password: 'Vadim1',
                            name: 'Зорина Светлана',
                            polyclinic: '22',
                            online: false,
                            prof: 'невролог',
                            bio: '',
                            avaImage: {},
                            work: [
                                    {
                                      date: new Date('1.1.2016'),
                                      data: {
                                        count: 165, adults: 145, children: 20, mens: 80,
                                        womans: 85, disease: 140, nodisease: 25,
                                        invalids: 9, veterans: 5, doctors: 4
                                      }
                                    },
                                    {
                                      date: new Date('2.1.2016'),
                                      data: {
                                        count: 160, adults: 148, children: 12, mens: 78,
                                        womans: 82, disease: 140, nodisease: 20,
                                        invalids: 11, veterans: 6, doctors: 4
                                      }
                                    },
                                    {
                                      date: new Date('3.1.2016'),
                                      data: {
                                        count: 150, adults: 130, children: 20, mens: 85,
                                        womans: 65, disease: 131, nodisease: 19,
                                        invalids: 8, veterans: 4, doctors: 3
                                      }
                                    },
                                    {
                                      date: new Date('4.1.2016'),
                                      data: {
                                        count: 145, adults: 122, children: 23, mens: 70,
                                        womans: 75, disease: 135, nodisease: 10,
                                        invalids: 7, veterans: 4, doctors: 3
                                      }
                                    },
                                    {
                                      date: new Date('5.1.2016'),
                                      data: {
                                        count: 120, adults: 103, children: 17, mens: 60,
                                        womans: 60, disease: 101, nodisease: 19,
                                        invalids: 4, veterans: 1, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('6.1.2016'),
                                      data: {
                                        count: 110, adults: 96, children: 14, mens: 60,
                                        womans: 50, disease: 95, nodisease: 15,
                                        invalids: 2, veterans: 0, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('7.1.2016'),
                                      data: {
                                        count: 101, adults: 91, children: 10, mens: 44,
                                        womans: 57, disease: 81, nodisease: 19,
                                        invalids: 2, veterans: 1, doctors: 1
                                      }
                                    },
                                    {
                                      date: new Date('8.1.2016'),
                                      data: {
                                        count: 107, adults: 93, children: 14, mens: 58,
                                        womans: 49, disease: 99, nodisease: 8,
                                        invalids: 4, veterans: 3, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('9.1.2016'),
                                      data: {
                                        count: 135, adults: 120, children: 15, mens: 65,
                                        womans: 70, disease: 115, nodisease: 20,
                                        invalids: 7, veterans: 4, doctors: 2
                                      }
                                    },
                                    {
                                      date: new Date('10.1.2016'),
                                      data: {
                                        count: 154, adults: 132, children: 22, mens: 80,
                                        womans: 74, disease: 130, nodisease: 24,
                                        invalids: 9, veterans: 5, doctors: 3
                                      }
                                    },
                                    {
                                      date: new Date('11.1.2016'),
                                      data: {
                                        count: 162, adults: 144, children: 18, mens: 82,
                                        womans: 80, disease: 139, nodisease: 23,
                                        invalids: 11, veterans: 7, doctors: 5
                                      }
                                    },
                                    {
                                      date: new Date('12.1.2016'),
                                      data: {
                                        count: 160, adults: 140, children: 20, mens: 85,
                                        womans: 75, disease: 141, nodisease: 19,
                                        invalids: 10, veterans: 4, doctors: 2
                                      }
                                    },
                                    {
                                      date: new Date('1.1.2017'),
                                      data: {
                                        count: 165, adults: 145, children: 20, mens: 80,
                                        womans: 85, disease: 140, nodisease: 25,
                                        invalids: 9, veterans: 5, doctors: 4
                                      }
                                    },
                                    {
                                      date: new Date('2.1.2017'),
                                      data: {
                                        count: 160, adults: 148, children: 12, mens: 78,
                                        womans: 82, disease: 140, nodisease: 20,
                                        invalids: 11, veterans: 6, doctors: 4
                                      }
                                    },
                                    {
                                      date: new Date('3.1.2017'),
                                      data: {
                                        count: 150, adults: 130, children: 20, mens: 85,
                                        womans: 65, disease: 131, nodisease: 19,
                                        invalids: 8, veterans: 4, doctors: 3
                                      }
                                    },
                                    {
                                      date: new Date('4.1.2017'),
                                      data: {
                                        count: 145, adults: 122, children: 23, mens: 70,
                                        womans: 75, disease: 135, nodisease: 10,
                                        invalids: 7, veterans: 4, doctors: 3
                                      }
                                    },
                                    {
                                      date: new Date('5.1.2017'),
                                      data: {
                                        count: 120, adults: 103, children: 17, mens: 60,
                                        womans: 60, disease: 101, nodisease: 19,
                                        invalids: 4, veterans: 1, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('6.1.2017'),
                                      data: {
                                        count: 110, adults: 96, children: 14, mens: 60,
                                        womans: 50, disease: 95, nodisease: 15,
                                        invalids: 2, veterans: 0, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('7.1.2017'),
                                      data: {
                                        count: 101, adults: 91, children: 10, mens: 44,
                                        womans: 57, disease: 81, nodisease: 19,
                                        invalids: 2, veterans: 1, doctors: 1
                                      }
                                    },
                                    {
                                      date: new Date('8.1.2017'),
                                      data: {
                                        count: 107, adults: 93, children: 14, mens: 58,
                                        womans: 49, disease: 99, nodisease: 8,
                                        invalids: 4, veterans: 3, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('9.1.2017'),
                                      data: {
                                        count: 135, adults: 120, children: 15, mens: 65,
                                        womans: 70, disease: 115, nodisease: 20,
                                        invalids: 7, veterans: 4, doctors: 2
                                      }
                                    },
                                    {
                                      date: new Date('10.1.2017'),
                                      data: {
                                        count: 154, adults: 132, children: 22, mens: 80,
                                        womans: 74, disease: 130, nodisease: 24,
                                        invalids: 9, veterans: 5, doctors: 3
                                      }
                                    },
                                    {
                                      date: new Date('11.1.2017'),
                                      data: {
                                        count: 162, adults: 144, children: 18, mens: 82,
                                        womans: 80, disease: 139, nodisease: 23,
                                        invalids: 11, veterans: 7, doctors: 5
                                      }
                                    },
                                    {
                                      date: new Date('12.1.2017'),
                                      data: {
                                        count: 160, adults: 140, children: 20, mens: 85,
                                        womans: 75, disease: 141, nodisease: 19,
                                        invalids: 10, veterans: 4, doctors: 2
                                      }
                                    },
                          ]
                      },
                      {
                            email: 'zina@mail.ru',
                            password: 'Vadim1',
                            name: 'Юрко Зинаида',
                            polyclinic: '22',
                            online: false,
                            prof: 'эндокринолог',
                            bio: '',
                            avaImage: {},
                            work: [
                                    {
                                      date: new Date('1.1.2016'),
                                      data: {
                                        count: 64, adults: 38, children: 26, mens: 32,
                                        womans: 32, disease: 40, nodisease: 14,
                                        invalids: 0, veterans: 1, doctors: 1
                                      }
                                    },
                                    {
                                      date: new Date('2.1.2016'),
                                      data: {
                                        count: 67, adults: 37, children: 30, mens: 22,
                                        womans: 45, disease: 47, nodisease: 20,
                                        invalids: 1, veterans: 1, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('3.1.2016'),
                                      data: {
                                        count: 61, adults: 31, children: 30, mens: 27,
                                        womans: 34, disease: 44, nodisease: 17,
                                        invalids: 0, veterans: 0, doctors: 1
                                      }
                                    },
                                    {
                                      date: new Date('4.1.2016'),
                                      data: {
                                        count: 68, adults: 48, children: 20, mens: 35,
                                        womans: 33, disease: 55, nodisease: 13,
                                        invalids: 2, veterans: 2, doctors: 2
                                      }
                                    },
                                    {
                                      date: new Date('5.1.2016'),
                                      data: {
                                        count: 50, adults: 30, children: 20, mens: 25,
                                        womans: 25, disease: 30, nodisease: 20,
                                        invalids: 1, veterans: 1, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('6.1.2016'),
                                      data: {
                                        count: 45, adults: 25, children: 20, mens: 20,
                                        womans: 25, disease: 35, nodisease: 10,
                                        invalids: 0, veterans: 0, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('7.1.2016'),
                                      data: {
                                        count: 55, adults: 35, children: 20, mens: 23,
                                        womans: 32, disease: 30, nodisease: 25,
                                        invalids: 2, veterans: 1, doctors: 1
                                      }
                                    },
                                    {
                                      date: new Date('8.1.2016'),
                                      data: {
                                        count: 59, adults: 38, children: 21, mens: 27,
                                        womans: 32, disease: 30, nodisease: 29,
                                        invalids: 1, veterans: 1, doctors: 1
                                      }
                                    },
                                    {
                                      date: new Date('9.1.2016'),
                                      data: {
                                        count: 62, adults: 40, children: 22, mens: 31,
                                        womans: 31, disease: 38, nodisease: 24,
                                        invalids: 2, veterans: 0, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('10.1.2016'),
                                      data: {
                                        count: 71, adults: 36, children: 35, mens: 36,
                                        womans: 35, disease: 36, nodisease: 35,
                                        invalids: 3, veterans: 2, doctors: 3
                                      }
                                    },
                                    {
                                      date: new Date('11.1.2016'),
                                      data: {
                                        count: 68, adults: 38, children: 30, mens: 35,
                                        womans: 33, disease: 38, nodisease: 30,
                                        invalids: 2, veterans: 0, doctors: 1
                                      }
                                    },
                                    {
                                      date: new Date('12.1.2016'),
                                      data: {
                                        count: 58, adults: 28, children: 30, mens: 28,
                                        womans: 30, disease: 30, nodisease: 28,
                                        invalids: 0, veterans: 0, doctors: 1
                                      }
                                    },
                                    {
                                      date: new Date('1.1.2017'),
                                      data: {
                                        count: 64, adults: 38, children: 26, mens: 32,
                                        womans: 32, disease: 40, nodisease: 14,
                                        invalids: 0, veterans: 1, doctors: 1
                                      }
                                    },
                                    {
                                      date: new Date('2.1.2017'),
                                      data: {
                                        count: 67, adults: 37, children: 30, mens: 22,
                                        womans: 45, disease: 47, nodisease: 20,
                                        invalids: 1, veterans: 1, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('3.1.2017'),
                                      data: {
                                        count: 61, adults: 31, children: 30, mens: 27,
                                        womans: 34, disease: 44, nodisease: 17,
                                        invalids: 0, veterans: 0, doctors: 1
                                      }
                                    },
                                    {
                                      date: new Date('4.1.2017'),
                                      data: {
                                        count: 68, adults: 48, children: 20, mens: 35,
                                        womans: 33, disease: 55, nodisease: 13,
                                        invalids: 2, veterans: 2, doctors: 2
                                      }
                                    },
                                    {
                                      date: new Date('5.1.2017'),
                                      data: {
                                        count: 50, adults: 30, children: 20, mens: 25,
                                        womans: 25, disease: 30, nodisease: 20,
                                        invalids: 1, veterans: 1, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('6.1.2017'),
                                      data: {
                                        count: 45, adults: 25, children: 20, mens: 20,
                                        womans: 25, disease: 35, nodisease: 10,
                                        invalids: 0, veterans: 0, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('7.1.2017'),
                                      data: {
                                        count: 55, adults: 35, children: 20, mens: 23,
                                        womans: 32, disease: 30, nodisease: 25,
                                        invalids: 2, veterans: 1, doctors: 1
                                      }
                                    },
                                    {
                                      date: new Date('8.1.2017'),
                                      data: {
                                        count: 59, adults: 38, children: 21, mens: 27,
                                        womans: 32, disease: 30, nodisease: 29,
                                        invalids: 1, veterans: 1, doctors: 1
                                      }
                                    },
                                    {
                                      date: new Date('9.1.2017'),
                                      data: {
                                        count: 62, adults: 40, children: 22, mens: 31,
                                        womans: 31, disease: 38, nodisease: 24,
                                        invalids: 2, veterans: 0, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('10.1.2017'),
                                      data: {
                                        count: 71, adults: 36, children: 35, mens: 36,
                                        womans: 35, disease: 36, nodisease: 35,
                                        invalids: 3, veterans: 2, doctors: 3
                                      }
                                    },
                                    {
                                      date: new Date('11.1.2017'),
                                      data: {
                                        count: 68, adults: 38, children: 30, mens: 35,
                                        womans: 33, disease: 38, nodisease: 30,
                                        invalids: 2, veterans: 0, doctors: 1
                                      }
                                    },
                                    {
                                      date: new Date('12.1.2017'),
                                      data: {
                                        count: 58, adults: 28, children: 30, mens: 28,
                                        womans: 30, disease: 30, nodisease: 28,
                                        invalids: 0, veterans: 0, doctors: 1
                                      }
                                    },
                          ]
                      },
                      {
                            email: 'vadim@mail.ru',
                            password: 'Vadim1',
                            name: 'Орехов Вадим',
                            polyclinic: '22',
                            online: false,
                            prof: 'кардиолог',
                            bio: '',
                            avaImage: {},
                            work: [
                                    {
                                      date: new Date('1.1.2016'),
                                      data: {
                                        count: 125, adults: 100, children: 25, mens: 70,
                                        womans: 55, disease: 90, nodisease: 35,
                                        invalids: 6,veterans: 1,doctors: 2
                                      }
                                    },
                                    {
                                      date: new Date('2.1.2016'),
                                      data: {
                                        count: 115, adults: 98, children: 17, mens: 60,
                                        womans: 55, disease: 80, nodisease: 35,
                                        invalids: 6, veterans: 0, doctors: 5
                                      }
                                    },
                                    {
                                      date: new Date('3.1.2016'),
                                      data: {
                                        count: 105, adults: 93, children: 12, mens: 55,
                                        womans: 50, disease: 70, nodisease: 35,
                                        invalids: 8, veterans: 3, doctors: 6
                                      }
                                    },
                                    {
                                      date: new Date('4.1.2016'),
                                      data: {
                                        count: 100, adults: 89, children: 11, mens: 45,
                                        womans: 55, disease: 75, nodisease: 25,
                                        invalids: 6, veterans: 0, doctors: 5
                                      }
                                    },
                                    {
                                      date: new Date('5.1.2016'),
                                      data: {
                                        count: 85, adults: 60, children: 15, mens: 45,
                                        womans: 35, disease: 75, nodisease: 10,
                                        invalids: 4, veterans: 1, doctors: 3
                                      }
                                    },
                                    {
                                      date: new Date('6.1.2016'),
                                      data: {
                                        count: 80, adults: 65, children: 15, mens: 40,
                                        womans: 40, disease: 75, nodisease: 5,
                                        invalids: 2, veterans: 0, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('7.1.2016'),
                                      data: {
                                        count: 84, adults: 61, children: 23, mens: 44,
                                        womans: 40, disease: 60, nodisease: 24,
                                        invalids: 3, veterans: 1, doctors: 1
                                      }
                                    },
                                    {
                                      date: new Date('8.1.2016'),
                                      data: {
                                        count: 73, adults: 63, children: 10, mens: 28,
                                        womans: 45, disease: 68, nodisease: 5,
                                        invalids: 1, veterans: 0, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('9.1.2016'),
                                      data: {
                                        count: 92, adults: 80, children: 12, mens: 45,
                                        womans: 47, disease: 85, nodisease: 7,
                                        invalids: 2, veterans: 1, doctors: 2
                                      }
                                    },
                                    {
                                      date: new Date('10.1.2016'),
                                      data: {
                                        count: 110, adults: 90, children: 20, mens: 60,
                                        womans: 50, disease: 100, nodisease: 10,
                                        invalids: 6, veterans: 4, doctors: 4
                                      }
                                    },
                                    {
                                      date: new Date('11.1.2016'),
                                      data: {
                                        count: 120, adults: 98, children: 22, mens: 60,
                                        womans: 60, disease: 110, nodisease: 10,
                                        invalids: 7, veterans: 3, doctors: 5
                                      }
                                    },
                                    {
                                      date: new Date('12.1.2016'),
                                      data: {
                                        count: 123, adults: 108, children: 15, mens: 58,
                                        womans: 65, disease: 111, nodisease: 12,
                                        invalids: 5, veterans: 2, doctors: 3
                                      }
                                    },
                                    {
                                      date: new Date('1.1.2017'),
                                      data: {
                                        count: 125, adults: 100, children: 25, mens: 70,
                                        womans: 55, disease: 90, nodisease: 35,
                                        invalids: 6,veterans: 1,doctors: 2
                                      }
                                    },
                                    {
                                      date: new Date('2.1.2017'),
                                      data: {
                                        count: 115, adults: 98, children: 17, mens: 60,
                                        womans: 55, disease: 80, nodisease: 35,
                                        invalids: 6, veterans: 0, doctors: 5
                                      }
                                    },
                                    {
                                      date: new Date('3.1.2017'),
                                      data: {
                                        count: 105, adults: 93, children: 12, mens: 55,
                                        womans: 50, disease: 70, nodisease: 35,
                                        invalids: 8, veterans: 3, doctors: 6
                                      }
                                    },
                                    {
                                      date: new Date('4.1.2017'),
                                      data: {
                                        count: 100, adults: 89, children: 11, mens: 45,
                                        womans: 55, disease: 75, nodisease: 25,
                                        invalids: 6, veterans: 0, doctors: 5
                                      }
                                    },
                                    {
                                      date: new Date('5.1.2017'),
                                      data: {
                                        count: 85, adults: 60, children: 15, mens: 45,
                                        womans: 35, disease: 75, nodisease: 10,
                                        invalids: 4, veterans: 1, doctors: 3
                                      }
                                    },
                                    {
                                      date: new Date('6.1.2017'),
                                      data: {
                                        count: 80, adults: 65, children: 15, mens: 40,
                                        womans: 40, disease: 75, nodisease: 5,
                                        invalids: 2, veterans: 0, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('7.1.2017'),
                                      data: {
                                        count: 84, adults: 61, children: 23, mens: 44,
                                        womans: 40, disease: 60, nodisease: 24,
                                        invalids: 3, veterans: 1, doctors: 1
                                      }
                                    },
                                    {
                                      date: new Date('8.1.2017'),
                                      data: {
                                        count: 73, adults: 63, children: 10, mens: 28,
                                        womans: 45, disease: 68, nodisease: 5,
                                        invalids: 1, veterans: 0, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('9.1.2017'),
                                      data: {
                                        count: 92, adults: 80, children: 12, mens: 45,
                                        womans: 47, disease: 85, nodisease: 7,
                                        invalids: 2, veterans: 1, doctors: 2
                                      }
                                    },
                                    {
                                      date: new Date('10.1.2017'),
                                      data: {
                                        count: 110, adults: 90, children: 20, mens: 60,
                                        womans: 50, disease: 100, nodisease: 10,
                                        invalids: 6, veterans: 4, doctors: 4
                                      }
                                    },
                                    {
                                      date: new Date('11.1.2017'),
                                      data: {
                                        count: 120, adults: 98, children: 22, mens: 60,
                                        womans: 60, disease: 110, nodisease: 10,
                                        invalids: 7, veterans: 3, doctors: 5
                                      }
                                    },
                                    {
                                      date: new Date('12.1.2017'),
                                      data: {
                                        count: 123, adults: 108, children: 15, mens: 58,
                                        womans: 65, disease: 111, nodisease: 12,
                                        invalids: 5, veterans: 2, doctors: 3
                                      }
                                    },
                          ]
                      },
                      {
                            email: 'valera@mail.ru',
                            password: 'Vadim1',
                            name: 'Кульбицкий Валера',
                            polyclinic: '22',
                            online: false,
                            prof: 'терапевт',
                            bio: '',
                            avaImage: {},
                            work: [
                                    {
                                      date: new Date('1.1.2016'),
                                      data: {
                                        count: 115, adults: 90, children: 25, mens: 65,
                                        womans: 45, disease: 80, nodisease: 35,
                                        invalids: 5,veterans: 2,doctors: 2
                                      }
                                    },
                                    {
                                      date: new Date('2.1.2016'),
                                      data: {
                                        count: 105, adults: 93, children: 12, mens: 55,
                                        womans: 45, disease: 70, nodisease: 35,
                                        invalids: 4, veterans: 1, doctors: 3
                                      }
                                    },
                                    {
                                      date: new Date('3.1.2016'),
                                      data: {
                                        count: 95, adults: 88, children: 7, mens: 50,
                                        womans: 45, disease: 60, nodisease: 35,
                                        invalids: 4, veterans: 2, doctors: 1
                                      }
                                    },
                                    {
                                      date: new Date('4.1.2016'),
                                      data: {
                                        count: 90, adults: 79, children: 11, mens: 40,
                                        womans: 50, disease: 65, nodisease: 25,
                                        invalids: 3, veterans: 1, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('5.1.2016'),
                                      data: {
                                        count: 75, adults: 50, children: 15, mens: 35,
                                        womans: 35, disease: 65, nodisease: 10,
                                        invalids: 2, veterans: 0, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('6.1.2016'),
                                      data: {
                                        count: 70, adults: 55, children: 15, mens: 40,
                                        womans: 30, disease: 65, nodisease: 5,
                                        invalids: 1, veterans: 0, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('7.1.2016'),
                                      data: {
                                        count: 74, adults: 51, children: 23, mens: 40,
                                        womans: 34, disease: 50, nodisease: 24,
                                        invalids: 0, veterans: 1, doctors: 1
                                      }
                                    },
                                    {
                                      date: new Date('8.1.2016'),
                                      data: {
                                        count: 63, adults: 53, children: 10, mens: 23,
                                        womans: 40, disease: 58, nodisease: 5,
                                        invalids: 1, veterans: 0, doctors: 1
                                      }
                                    },
                                    {
                                      date: new Date('9.1.2016'),
                                      data: {
                                        count: 82, adults: 70, children: 12, mens: 40,
                                        womans: 42, disease: 75, nodisease: 7,
                                        invalids: 2, veterans: 1, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('10.1.2016'),
                                      data: {
                                        count: 100, adults: 80, children: 20, mens: 50,
                                        womans: 50, disease: 90, nodisease: 10,
                                        invalids: 4, veterans: 3, doctors: 2
                                      }
                                    },
                                    {
                                      date: new Date('11.1.2016'),
                                      data: {
                                        count: 110, adults: 88, children: 22, mens: 55,
                                        womans: 55, disease: 100, nodisease: 10,
                                        invalids: 6, veterans: 3, doctors: 4
                                      }
                                    },
                                    {
                                      date: new Date('12.1.2016'),
                                      data: {
                                        count: 113, adults: 98, children: 15, mens: 53,
                                        womans: 60, disease: 101, nodisease: 12,
                                        invalids: 5, veterans: 2, doctors: 3
                                      }
                                    },
                                    {
                                      date: new Date('1.1.2017'),
                                      data: {
                                        count: 115, adults: 90, children: 25, mens: 65,
                                        womans: 45, disease: 80, nodisease: 35,
                                        invalids: 5,veterans: 2,doctors: 2
                                      }
                                    },
                                    {
                                      date: new Date('2.1.2017'),
                                      data: {
                                        count: 105, adults: 93, children: 12, mens: 55,
                                        womans: 45, disease: 70, nodisease: 35,
                                        invalids: 4, veterans: 1, doctors: 3
                                      }
                                    },
                                    {
                                      date: new Date('3.1.2017'),
                                      data: {
                                        count: 95, adults: 88, children: 7, mens: 50,
                                        womans: 45, disease: 60, nodisease: 35,
                                        invalids: 4, veterans: 2, doctors: 1
                                      }
                                    },
                                    {
                                      date: new Date('4.1.2017'),
                                      data: {
                                        count: 90, adults: 79, children: 11, mens: 40,
                                        womans: 50, disease: 65, nodisease: 25,
                                        invalids: 3, veterans: 1, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('5.1.2017'),
                                      data: {
                                        count: 75, adults: 50, children: 15, mens: 35,
                                        womans: 35, disease: 65, nodisease: 10,
                                        invalids: 2, veterans: 0, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('6.1.2017'),
                                      data: {
                                        count: 70, adults: 55, children: 15, mens: 40,
                                        womans: 30, disease: 65, nodisease: 5,
                                        invalids: 1, veterans: 0, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('7.1.2017'),
                                      data: {
                                        count: 74, adults: 51, children: 23, mens: 40,
                                        womans: 34, disease: 50, nodisease: 24,
                                        invalids: 0, veterans: 1, doctors: 1
                                      }
                                    },
                                    {
                                      date: new Date('8.1.2017'),
                                      data: {
                                        count: 63, adults: 53, children: 10, mens: 23,
                                        womans: 40, disease: 58, nodisease: 5,
                                        invalids: 1, veterans: 0, doctors: 1
                                      }
                                    },
                                    {
                                      date: new Date('9.1.2017'),
                                      data: {
                                        count: 82, adults: 70, children: 12, mens: 40,
                                        womans: 42, disease: 75, nodisease: 7,
                                        invalids: 2, veterans: 1, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('10.1.2017'),
                                      data: {
                                        count: 100, adults: 80, children: 20, mens: 50,
                                        womans: 50, disease: 90, nodisease: 10,
                                        invalids: 4, veterans: 3, doctors: 2
                                      }
                                    },
                                    {
                                      date: new Date('11.1.2017'),
                                      data: {
                                        count: 110, adults: 88, children: 22, mens: 55,
                                        womans: 55, disease: 100, nodisease: 10,
                                        invalids: 6, veterans: 3, doctors: 4
                                      }
                                    },
                                    {
                                      date: new Date('12.1.2017'),
                                      data: {
                                        count: 113, adults: 98, children: 15, mens: 53,
                                        womans: 60, disease: 101, nodisease: 12,
                                        invalids: 5, veterans: 2, doctors: 3
                                      }
                                    },
                          ]
                      },
                      {
                            email: 'amos@mail.ru',
                            password: 'Vadim1',
                            name: 'Амосов Андрей',
                            polyclinic: '22',
                            online: false,
                            prof: 'терапевт',
                            bio: '',
                            avaImage: {},
                            work: [
                                    {
                                      date: new Date('1.1.2016'),
                                      data: {
                                        count: 125, adults: 100, children: 25, mens: 70,
                                        womans: 55, disease: 90, nodisease: 35,
                                        invalids: 6,veterans: 1,doctors: 2
                                      }
                                    },
                                    {
                                      date: new Date('2.1.2016'),
                                      data: {
                                        count: 105, adults: 88, children: 17, mens: 50,
                                        womans: 55, disease: 70, nodisease: 35,
                                        invalids: 5, veterans: 0, doctors: 2
                                      }
                                    },
                                    {
                                      date: new Date('3.1.2016'),
                                      data: {
                                        count: 105, adults: 93, children: 12, mens: 55,
                                        womans: 50, disease: 70, nodisease: 35,
                                        invalids: 8, veterans: 3, doctors: 6
                                      }
                                    },
                                    {
                                      date: new Date('4.1.2016'),
                                      data: {
                                        count: 110, adults: 89, children: 21, mens: 55,
                                        womans: 55, disease: 75, nodisease: 35,
                                        invalids: 6, veterans: 2, doctors: 5
                                      }
                                    },
                                    {
                                      date: new Date('5.1.2016'),
                                      data: {
                                        count: 85, adults: 60, children: 15, mens: 45,
                                        womans: 35, disease: 75, nodisease: 10,
                                        invalids: 4, veterans: 1, doctors: 3
                                      }
                                    },
                                    {
                                      date: new Date('6.1.2016'),
                                      data: {
                                        count: 70, adults: 55, children: 15, mens: 40,
                                        womans: 30, disease: 65, nodisease: 5,
                                        invalids: 1, veterans: 0, doctors: 1
                                      }
                                    },
                                    {
                                      date: new Date('7.1.2016'),
                                      data: {
                                        count: 84, adults: 61, children: 23, mens: 44,
                                        womans: 40, disease: 60, nodisease: 24,
                                        invalids: 3, veterans: 1, doctors: 1
                                      }
                                    },
                                    {
                                      date: new Date('8.1.2016'),
                                      data: {
                                        count: 83, adults: 63, children: 20, mens: 38,
                                        womans: 45, disease: 68, nodisease: 5,
                                        invalids: 1, veterans: 2, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('9.1.2016'),
                                      data: {
                                        count: 92, adults: 80, children: 12, mens: 45,
                                        womans: 47, disease: 85, nodisease: 7,
                                        invalids: 2, veterans: 1, doctors: 2
                                      }
                                    },
                                    {
                                      date: new Date('10.1.2016'),
                                      data: {
                                        count: 100, adults: 80, children: 20, mens: 50,
                                        womans: 50, disease: 90, nodisease: 10,
                                        invalids: 4, veterans: 3, doctors: 4
                                      }
                                    },
                                    {
                                      date: new Date('11.1.2016'),
                                      data: {
                                        count: 120, adults: 98, children: 22, mens: 60,
                                        womans: 60, disease: 110, nodisease: 10,
                                        invalids: 7, veterans: 3, doctors: 5
                                      }
                                    },
                                    {
                                      date: new Date('12.1.2016'),
                                      data: {
                                        count: 133, adults: 108, children: 25, mens: 68,
                                        womans: 65, disease: 111, nodisease: 22,
                                        invalids: 4, veterans: 4, doctors: 4
                                      }
                                    },
                                    {
                                      date: new Date('1.1.2017'),
                                      data: {
                                        count: 125, adults: 100, children: 25, mens: 70,
                                        womans: 55, disease: 90, nodisease: 35,
                                        invalids: 6,veterans: 1,doctors: 2
                                      }
                                    },
                                    {
                                      date: new Date('2.1.2017'),
                                      data: {
                                        count: 105, adults: 88, children: 17, mens: 50,
                                        womans: 55, disease: 70, nodisease: 35,
                                        invalids: 5, veterans: 0, doctors: 2
                                      }
                                    },
                                    {
                                      date: new Date('3.1.2017'),
                                      data: {
                                        count: 105, adults: 93, children: 12, mens: 55,
                                        womans: 50, disease: 70, nodisease: 35,
                                        invalids: 8, veterans: 3, doctors: 6
                                      }
                                    },
                                    {
                                      date: new Date('4.1.2017'),
                                      data: {
                                        count: 110, adults: 89, children: 21, mens: 55,
                                        womans: 55, disease: 75, nodisease: 35,
                                        invalids: 6, veterans: 2, doctors: 5
                                      }
                                    },
                                    {
                                      date: new Date('5.1.2017'),
                                      data: {
                                        count: 85, adults: 60, children: 15, mens: 45,
                                        womans: 35, disease: 75, nodisease: 10,
                                        invalids: 4, veterans: 1, doctors: 3
                                      }
                                    },
                                    {
                                      date: new Date('6.1.2017'),
                                      data: {
                                        count: 70, adults: 55, children: 15, mens: 40,
                                        womans: 30, disease: 65, nodisease: 5,
                                        invalids: 1, veterans: 0, doctors: 1
                                      }
                                    },
                                    {
                                      date: new Date('7.1.2017'),
                                      data: {
                                        count: 84, adults: 61, children: 23, mens: 44,
                                        womans: 40, disease: 60, nodisease: 24,
                                        invalids: 3, veterans: 1, doctors: 1
                                      }
                                    },
                                    {
                                      date: new Date('8.1.2017'),
                                      data: {
                                        count: 83, adults: 63, children: 20, mens: 38,
                                        womans: 45, disease: 68, nodisease: 5,
                                        invalids: 1, veterans: 2, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('9.1.2017'),
                                      data: {
                                        count: 92, adults: 80, children: 12, mens: 45,
                                        womans: 47, disease: 85, nodisease: 7,
                                        invalids: 2, veterans: 1, doctors: 2
                                      }
                                    },
                                    {
                                      date: new Date('10.1.2017'),
                                      data: {
                                        count: 100, adults: 80, children: 20, mens: 50,
                                        womans: 50, disease: 90, nodisease: 10,
                                        invalids: 4, veterans: 3, doctors: 4
                                      }
                                    },
                                    {
                                      date: new Date('11.1.2017'),
                                      data: {
                                        count: 120, adults: 98, children: 22, mens: 60,
                                        womans: 60, disease: 110, nodisease: 10,
                                        invalids: 7, veterans: 3, doctors: 5
                                      }
                                    },
                                    {
                                      date: new Date('12.1.2017'),
                                      data: {
                                        count: 133, adults: 108, children: 25, mens: 68,
                                        womans: 65, disease: 111, nodisease: 22,
                                        invalids: 4, veterans: 4, doctors: 4
                                      }
                                    },
                          ]
                      },
                      {
                            email: 'vitja@mail.ru',
                            password: 'Vadim1',
                            name: 'Андреенко Виктор',
                            polyclinic: '22',
                            online: false,
                            prof: 'врач УЗИ',
                            bio: '',
                            avaImage: {},
                            work: [
                                    {
                                      date: new Date('1.1.2016'),
                                      data: {
                                        count: 45, adults: 35, children: 10, mens: 25,
                                        womans: 20, disease: 30, nodisease: 15,
                                        invalids: 5, veterans: 2, doctors: 1
                                      }
                                    },
                                    {
                                      date: new Date('2.1.2016'),
                                      data: {
                                        count: 43, adults: 33, children: 10, mens: 30,
                                        womans: 13, disease: 36, nodisease: 7,
                                        invalids: 1, veterans: 0, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('3.1.2016'),
                                      data: {
                                        count: 39, adults: 28, children: 11, mens: 20,
                                        womans: 19, disease: 33, nodisease: 6,
                                        invalids: 0, veterans: 1, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('4.1.2016'),
                                      data: {
                                        count: 38, adults: 30, children: 8, mens: 15,
                                        womans: 23, disease: 30, nodisease: 28,
                                        invalids: 1, veterans: 0, doctors: 1
                                      }
                                    },
                                    {
                                      date: new Date('5.1.2016'),
                                      data: {
                                        count: 41, adults: 36, children: 5, mens: 25,
                                        womans: 16, disease: 36, nodisease: 5,
                                        invalids: 0, veterans: 1, doctors: 1
                                      }
                                    },
                                    {
                                      date: new Date('6.1.2016'),
                                      data: {
                                        count: 43, adults: 28, children: 15, mens: 20,
                                        womans: 23, disease: 30, nodisease: 13,
                                        invalids: 2, veterans: 0, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('7.1.2016'),
                                      data: {
                                        count: 44, adults: 29, children: 15, mens: 20,
                                        womans: 24, disease: 24, nodisease: 20,
                                        invalids: 1, veterans: 1, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('8.1.2016'),
                                      data: {
                                        count: 40, adults: 20, children: 20, mens: 22,
                                        womans: 18, disease: 21, nodisease: 19,
                                        invalids: 1, veterans: 0, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('9.1.2016'),
                                      data: {
                                        count: 38, adults: 20, children: 18, mens: 20,
                                        womans: 18, disease: 18, nodisease: 20,
                                        invalids: 0, veterans: 1, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('10.1.2016'),
                                      data: {
                                        count: 35, adults: 25, children: 10, mens: 15,
                                        womans: 20, disease: 20, nodisease: 15,
                                        invalids: 2, veterans: 0, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('11.1.2016'),
                                      data: {
                                        count: 33, adults: 15, children: 18, mens: 15,
                                        womans: 18, disease: 15, nodisease: 18,
                                        invalids: 2, veterans: 1, doctors: 1
                                      }
                                    },
                                    {
                                      date: new Date('12.1.2016'),
                                      data: {
                                        count: 38, adults: 20, children: 18, mens: 18,
                                        womans: 20, disease: 20, nodisease: 18,
                                        invalids: 0, veterans: 0, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('1.1.2017'),
                                      data: {
                                        count: 45, adults: 35, children: 10, mens: 25,
                                        womans: 20, disease: 30, nodisease: 15,
                                        invalids: 5, veterans: 2, doctors: 1
                                      }
                                    },
                                    {
                                      date: new Date('2.1.2017'),
                                      data: {
                                        count: 43, adults: 33, children: 10, mens: 30,
                                        womans: 13, disease: 36, nodisease: 7,
                                        invalids: 1, veterans: 0, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('3.1.2017'),
                                      data: {
                                        count: 39, adults: 28, children: 11, mens: 20,
                                        womans: 19, disease: 33, nodisease: 6,
                                        invalids: 0, veterans: 1, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('4.1.2017'),
                                      data: {
                                        count: 38, adults: 30, children: 8, mens: 15,
                                        womans: 23, disease: 30, nodisease: 28,
                                        invalids: 1, veterans: 0, doctors: 1
                                      }
                                    },
                                    {
                                      date: new Date('5.1.2017'),
                                      data: {
                                        count: 41, adults: 36, children: 5, mens: 25,
                                        womans: 16, disease: 36, nodisease: 5,
                                        invalids: 0, veterans: 1, doctors: 1
                                      }
                                    },
                                    {
                                      date: new Date('6.1.2017'),
                                      data: {
                                        count: 43, adults: 28, children: 15, mens: 20,
                                        womans: 23, disease: 30, nodisease: 13,
                                        invalids: 2, veterans: 0, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('7.1.2017'),
                                      data: {
                                        count: 44, adults: 29, children: 15, mens: 20,
                                        womans: 24, disease: 24, nodisease: 20,
                                        invalids: 1, veterans: 1, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('8.1.2017'),
                                      data: {
                                        count: 40, adults: 20, children: 20, mens: 22,
                                        womans: 18, disease: 21, nodisease: 19,
                                        invalids: 1, veterans: 0, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('9.1.2017'),
                                      data: {
                                        count: 38, adults: 20, children: 18, mens: 20,
                                        womans: 18, disease: 18, nodisease: 20,
                                        invalids: 0, veterans: 1, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('10.1.2017'),
                                      data: {
                                        count: 35, adults: 25, children: 10, mens: 15,
                                        womans: 20, disease: 20, nodisease: 15,
                                        invalids: 2, veterans: 0, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('11.1.2017'),
                                      data: {
                                        count: 33, adults: 15, children: 18, mens: 15,
                                        womans: 18, disease: 15, nodisease: 18,
                                        invalids: 2, veterans: 1, doctors: 1
                                      }
                                    },
                                    {
                                      date: new Date('12.1.2017'),
                                      data: {
                                        count: 38, adults: 20, children: 18, mens: 18,
                                        womans: 20, disease: 20, nodisease: 18,
                                        invalids: 0, veterans: 0, doctors: 0
                                      }
                                    },
                          ]
                      },
                      {
                            email: 'ehya@mail.ru',
                            password: 'Vadim1',
                            name: 'Орехова Евгения',
                            polyclinic: '22',
                            online: false,
                            prof: 'врач ЛФК',
                            bio: '',
                            avaImage: {},
                            work: [
                                    {
                                      date: new Date('1.1.2016'),
                                      data: {
                                        count: 20, adults: 10, children: 10, mens: 12,
                                        womans: 8, disease: 12, nodisease: 8,
                                        invalids: 2,veterans: 0,doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('2.1.2016'),
                                      data: {
                                        count: 22, adults: 15, children: 7, mens: 13,
                                        womans: 12, disease: 14, nodisease: 8,
                                        invalids: 1, veterans: 0, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('3.1.2016'),
                                      data: {
                                        count: 23, adults: 17, children: 6, mens: 13,
                                        womans: 10, disease: 16, nodisease: 7,
                                        invalids: 1, veterans: 0, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('4.1.2016'),
                                      data: {
                                        count: 26, adults: 19, children: 7, mens: 10,
                                        womans: 16, disease: 20, nodisease: 6,
                                        invalids: 2, veterans: 0, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('5.1.2016'),
                                      data: {
                                        count: 25, adults: 20, children: 5, mens: 13,
                                        womans: 12, disease: 21, nodisease: 4,
                                        invalids: 1, veterans: 1, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('6.1.2016'),
                                      data: {
                                        count: 21, adults: 17, children: 4, mens: 11,
                                        womans: 10, disease: 18, nodisease: 3,
                                        invalids: 2, veterans: 1, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('7.1.2016'),
                                      data: {
                                        count: 19, adults: 16, children: 3, mens: 9,
                                        womans: 10, disease: 18, nodisease: 1,
                                        invalids: 1, veterans: 0, doctors: 1
                                      }
                                    },
                                    {
                                      date: new Date('8.1.2016'),
                                      data: {
                                        count: 18, adults: 15, children: 3, mens: 8,
                                        womans: 10, disease: 15, nodisease: 3,
                                        invalids: 2, veterans: 1, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('9.1.2016'),
                                      data: {
                                        count: 23, adults: 19, children: 4, mens: 8,
                                        womans: 15, disease: 20, nodisease: 3,
                                        invalids: 4, veterans: 1, doctors: 1
                                      }
                                    },
                                    {
                                      date: new Date('10.1.2016'),
                                      data: {
                                        count: 25, adults: 20, children: 5, mens: 10,
                                        womans: 15, disease: 20, nodisease: 5,
                                        invalids: 4, veterans: 1, doctors: 1
                                      }
                                    },
                                    {
                                      date: new Date('11.1.2016'),
                                      data: {
                                        count: 24, adults: 19, children: 5, mens: 11,
                                        womans: 13, disease: 20, nodisease: 4,
                                        invalids: 3, veterans: 0, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('12.1.2016'),
                                      data: {
                                        count: 22, adults: 19, children: 3, mens: 10,
                                        womans: 12, disease: 19, nodisease: 3,
                                        invalids: 3, veterans: 1, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('1.1.2017'),
                                      data: {
                                        count: 20, adults: 10, children: 10, mens: 12,
                                        womans: 8, disease: 12, nodisease: 8,
                                        invalids: 2,veterans: 0,doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('2.1.2017'),
                                      data: {
                                        count: 22, adults: 15, children: 7, mens: 13,
                                        womans: 12, disease: 14, nodisease: 8,
                                        invalids: 1, veterans: 0, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('3.1.2017'),
                                      data: {
                                        count: 23, adults: 17, children: 6, mens: 13,
                                        womans: 10, disease: 16, nodisease: 7,
                                        invalids: 1, veterans: 0, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('4.1.2017'),
                                      data: {
                                        count: 26, adults: 19, children: 7, mens: 10,
                                        womans: 16, disease: 20, nodisease: 6,
                                        invalids: 2, veterans: 0, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('5.1.2017'),
                                      data: {
                                        count: 25, adults: 20, children: 5, mens: 13,
                                        womans: 12, disease: 21, nodisease: 4,
                                        invalids: 1, veterans: 1, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('6.1.2017'),
                                      data: {
                                        count: 21, adults: 17, children: 4, mens: 11,
                                        womans: 10, disease: 18, nodisease: 3,
                                        invalids: 2, veterans: 1, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('7.1.2017'),
                                      data: {
                                        count: 19, adults: 16, children: 3, mens: 9,
                                        womans: 10, disease: 18, nodisease: 1,
                                        invalids: 1, veterans: 0, doctors: 1
                                      }
                                    },
                                    {
                                      date: new Date('8.1.2017'),
                                      data: {
                                        count: 18, adults: 15, children: 3, mens: 8,
                                        womans: 10, disease: 15, nodisease: 3,
                                        invalids: 2, veterans: 1, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('9.1.2017'),
                                      data: {
                                        count: 23, adults: 19, children: 4, mens: 8,
                                        womans: 15, disease: 20, nodisease: 3,
                                        invalids: 4, veterans: 1, doctors: 1
                                      }
                                    },
                                    {
                                      date: new Date('10.1.2017'),
                                      data: {
                                        count: 25, adults: 20, children: 5, mens: 10,
                                        womans: 15, disease: 20, nodisease: 5,
                                        invalids: 4, veterans: 1, doctors: 1
                                      }
                                    },
                                    {
                                      date: new Date('11.1.2017'),
                                      data: {
                                        count: 24, adults: 19, children: 5, mens: 11,
                                        womans: 13, disease: 20, nodisease: 4,
                                        invalids: 3, veterans: 0, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('12.1.2017'),
                                      data: {
                                        count: 22, adults: 19, children: 3, mens: 10,
                                        womans: 12, disease: 19, nodisease: 3,
                                        invalids: 3, veterans: 1, doctors: 0
                                      }
                                    },
                          ]
                      },
                      {
                            email: 'karp@mail.ru',
                            password: 'Vadim1',
                            name: 'Карпович Жанна',
                            polyclinic: '22',
                            online: false,
                            prof: 'врач МРТ',
                            bio: '',
                            avaImage: {},
                            work: [
                                    {
                                      date: new Date('1.1.2016'),
                                      data: {
                                        count: 45, adults: 35, children: 10, mens: 25,
                                        womans: 20, disease: 30, nodisease: 15,
                                        invalids: 5, veterans: 2, doctors: 1
                                      }
                                    },
                                    {
                                      date: new Date('2.1.2016'),
                                      data: {
                                        count: 43, adults: 33, children: 10, mens: 30,
                                        womans: 13, disease: 36, nodisease: 7,
                                        invalids: 1, veterans: 0, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('3.1.2016'),
                                      data: {
                                        count: 39, adults: 28, children: 11, mens: 20,
                                        womans: 19, disease: 33, nodisease: 6,
                                        invalids: 0, veterans: 1, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('4.1.2016'),
                                      data: {
                                        count: 38, adults: 30, children: 8, mens: 15,
                                        womans: 23, disease: 30, nodisease: 28,
                                        invalids: 1, veterans: 0, doctors: 1
                                      }
                                    },
                                    {
                                      date: new Date('5.1.2016'),
                                      data: {
                                        count: 41, adults: 36, children: 5, mens: 25,
                                        womans: 16, disease: 36, nodisease: 5,
                                        invalids: 0, veterans: 1, doctors: 1
                                      }
                                    },
                                    {
                                      date: new Date('6.1.2016'),
                                      data: {
                                        count: 43, adults: 28, children: 15, mens: 20,
                                        womans: 23, disease: 30, nodisease: 13,
                                        invalids: 2, veterans: 0, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('7.1.2016'),
                                      data: {
                                        count: 44, adults: 29, children: 15, mens: 20,
                                        womans: 24, disease: 24, nodisease: 20,
                                        invalids: 1, veterans: 1, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('8.1.2016'),
                                      data: {
                                        count: 40, adults: 20, children: 20, mens: 22,
                                        womans: 18, disease: 21, nodisease: 19,
                                        invalids: 1, veterans: 0, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('9.1.2016'),
                                      data: {
                                        count: 38, adults: 20, children: 18, mens: 20,
                                        womans: 18, disease: 18, nodisease: 20,
                                        invalids: 0, veterans: 1, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('10.1.2016'),
                                      data: {
                                        count: 35, adults: 25, children: 10, mens: 15,
                                        womans: 20, disease: 20, nodisease: 15,
                                        invalids: 2, veterans: 0, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('11.1.2016'),
                                      data: {
                                        count: 33, adults: 15, children: 18, mens: 15,
                                        womans: 18, disease: 15, nodisease: 18,
                                        invalids: 2, veterans: 1, doctors: 1
                                      }
                                    },
                                    {
                                      date: new Date('12.1.2016'),
                                      data: {
                                        count: 38, adults: 20, children: 18, mens: 18,
                                        womans: 20, disease: 20, nodisease: 18,
                                        invalids: 0, veterans: 0, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('1.1.2017'),
                                      data: {
                                        count: 45, adults: 35, children: 10, mens: 25,
                                        womans: 20, disease: 30, nodisease: 15,
                                        invalids: 5, veterans: 2, doctors: 1
                                      }
                                    },
                                    {
                                      date: new Date('2.1.2017'),
                                      data: {
                                        count: 43, adults: 33, children: 10, mens: 30,
                                        womans: 13, disease: 36, nodisease: 7,
                                        invalids: 1, veterans: 0, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('3.1.2017'),
                                      data: {
                                        count: 39, adults: 28, children: 11, mens: 20,
                                        womans: 19, disease: 33, nodisease: 6,
                                        invalids: 0, veterans: 1, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('4.1.2017'),
                                      data: {
                                        count: 38, adults: 30, children: 8, mens: 15,
                                        womans: 23, disease: 30, nodisease: 28,
                                        invalids: 1, veterans: 0, doctors: 1
                                      }
                                    },
                                    {
                                      date: new Date('5.1.2017'),
                                      data: {
                                        count: 41, adults: 36, children: 5, mens: 25,
                                        womans: 16, disease: 36, nodisease: 5,
                                        invalids: 0, veterans: 1, doctors: 1
                                      }
                                    },
                                    {
                                      date: new Date('6.1.2017'),
                                      data: {
                                        count: 43, adults: 28, children: 15, mens: 20,
                                        womans: 23, disease: 30, nodisease: 13,
                                        invalids: 2, veterans: 0, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('7.1.2017'),
                                      data: {
                                        count: 44, adults: 29, children: 15, mens: 20,
                                        womans: 24, disease: 24, nodisease: 20,
                                        invalids: 1, veterans: 1, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('8.1.2017'),
                                      data: {
                                        count: 40, adults: 20, children: 20, mens: 22,
                                        womans: 18, disease: 21, nodisease: 19,
                                        invalids: 1, veterans: 0, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('9.1.2017'),
                                      data: {
                                        count: 38, adults: 20, children: 18, mens: 20,
                                        womans: 18, disease: 18, nodisease: 20,
                                        invalids: 0, veterans: 1, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('10.1.2017'),
                                      data: {
                                        count: 35, adults: 25, children: 10, mens: 15,
                                        womans: 20, disease: 20, nodisease: 15,
                                        invalids: 2, veterans: 0, doctors: 0
                                      }
                                    },
                                    {
                                      date: new Date('11.1.2017'),
                                      data: {
                                        count: 33, adults: 15, children: 18, mens: 15,
                                        womans: 18, disease: 15, nodisease: 18,
                                        invalids: 2, veterans: 1, doctors: 1
                                      }
                                    },
                                    {
                                      date: new Date('12.1.2017'),
                                      data: {
                                        count: 38, adults: 20, children: 18, mens: 18,
                                        womans: 20, disease: 20, nodisease: 18,
                                        invalids: 0, veterans: 0, doctors: 0
                                      }
                                    },
                          ]
                      },


];//if you insert new properties in this database do it also in register component

module.exports = userDataBase;
