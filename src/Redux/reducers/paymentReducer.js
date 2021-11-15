import React, { useState } from "react";
import { handleActions, createAction } from "redux-actions";

const CHANGE_PAYMENT = "CHANGE_PAYMENT";

export const changePayment = createAction(CHANGE_PAYMENT);

const initState = {
    originPayments: {
        //key => lesson's key value, value => members
        1: [
            //lesson's key
            {
                id: 1,
                // member's key
                name: "Jon",
                payment: [
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                ],
            },
        ],
        2: [
            {
                id: 2,
                name: "Cersei",
                payment: [
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                ],
            },
            {
                id: 3,
                name: "Jaime",
                payment: [
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                ],
            },
        ],
        3: [
            {
                id: 4,
                name: "Arya",
                payment: [
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                ],
            },
            {
                id: 5,
                name: "Daenerys",
                payment: [
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                ],
            },
            {
                id: 6,
                name: "null",
                payment: [
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                ],
            },
        ],
        4: [
            {
                id: 7,
                name: "Ferrara",
                payment: [
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                ],
            },
            {
                id: 8,
                name: "Rossini",
                payment: [
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                ],
            },
            {
                id: 9,
                name: "Harvey",
                payment: [
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                ],
            },
            {
                id: 10,
                name: "Harvey1",
                payment: [
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                ],
            },
        ],
        5: [
            {
                id: 11,
                name: "Ferrara8",
                payment: [
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                ],
            },
            {
                id: 12,
                name: "Rossini8",
                payment: [
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                ],
            },
            {
                id: 13,
                name: "Harve8",
                payment: [
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                ],
            },
            {
                id: 14,
                name: "Harvey8",
                payment: [
                    "payed",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                    "yet",
                ],
            },
        ],
    },
    selected: [],
};

const paymentReducer = handleActions(
    {
        [CHANGE_PAYMENT]: (state, action) => ({
            ...state,
            originPayments: action.payload.updatedPayments,
        }),
    },
    initState
);

export default paymentReducer;
