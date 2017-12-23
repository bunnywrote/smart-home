import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {

        let house = {
            actors: [
                { id: 3, name: "door", value: "0", minValue: "0", maxValue: "1" }
            ],
            floors: [
                {
                    number: 0,
                    actors: [
                        { id: 1, name: "light", value: "0", minValue: "0", maxValue: "1" }
                    ],
                    blocks: [
                        {
                            number: 0,
                            rooms: [
                                {
                                    number: 1,
                                    sensors: [
                                        { id: 1, name: "temperature", value: "23" },
                                        { id: 2, name: "humidity", value: "46" }
                                    ],
                                    actors: [
                                        { id: 1, name: "light", value: "0", minValue: "0", maxValue: "1" }
                                    ]
                                },
                                {
                                    number: 2,
                                    sensors: [
                                        { id: 1, name: "temperature", value: "19" },
                                        { id: 2, name: "humidity", value: "55" }
                                    ],
                                    actors: [
                                        { id: 1, name: "light", value: "1", minValue: "0", maxValue: "1" }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    number: 1,
                    actors: [
                        { id: 1, name: "light", value: "0", minValue: "0", maxValue: "1" }
                    ],
                    blocks: [
                        {
                            number: 0,
                            rooms: [
                                {
                                    number: 1,
                                    sensors: [
                                        { id: 1, name: "temperature", value: "23" },
                                        { id: 2, name: "humidity", value: "46" }
                                    ],
                                    actors: [
                                        { id: 1, name: "light", value: "0", minValue: "0", maxValue: "1" }
                                    ]
                                },
                                {
                                    number: 2,
                                    sensors: [
                                        { id: 1, name: "temperature", value: "19" },
                                        { id: 2, name: "humidity", value: "55" }
                                    ],
                                    actors: [
                                        { id: 1, name: "light", value: "1", minValue: "0", maxValue: "1" }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    number: 2,
                    actors: [
                        { id: 1, name: "light", value: "0", minValue: "0", maxValue: "1" }
                    ],
                    blocks: [
                        {
                            number: 0,
                            rooms: [
                                {
                                    number: 1,
                                    sensors: [
                                        { id: 1, name: "temperature", value: "23" },
                                        { id: 2, name: "humidity", value: "46" }
                                    ],
                                    actors: [
                                        { id: 1, name: "light", value: "0", minValue: "0", maxValue: "1" }
                                    ]
                                },
                                {
                                    number: 2,
                                    sensors: [
                                        { id: 1, name: "temperature", value: "19" },
                                        { id: 2, name: "humidity", value: "55" }
                                    ],
                                    actors: [
                                        { id: 1, name: "light", value: "1", minValue: "0", maxValue: "1" }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
        return { house };
    }
}