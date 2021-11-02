import React from "react";
import VerticalWrapper from "../../components/wrapper/vertical";
import HorizontalWrapper from "../../components/wrapper/horizontal";
import Title from "../../components/title";
import InputBox from "../../components/input";
import ButtonBox from "../../components/button";
import { useSelector, useDispatch } from "react-redux";
import {
    updateJoinId,
    updateJoinPassword,
} from "../../Redux/reducers/joinReducer";

function JoinPage() {
    const dispatch = useDispatch();
    const id = useSelector((state) => state.join.id);
    const password = useSelector((state) => state.join.password);

    console.log("Id :>> ", id);
    console.log("password :>> ", password);

    const updateId = (e) => {
        dispatch(updateJoinId({ id: e.target.value }));
    };
    const updatePassword = (e) => {
        dispatch(updateJoinPassword({ password: e.target.value }));
    };

    return (
        <VerticalWrapper width="100%" height="100vh" backColor="">
            <VerticalWrapper
                width="400px"
                height="350px"
                padding="10px"
                justifyContent="space-around"
            >
                <Title text="모두의 관리" />
                <VerticalWrapper
                    width="100%"
                    height="120px"
                    justifyContent="space-around"
                    alignItems="flex-start"
                >
                    <InputBox
                        onChange={updateId}
                        type="text"
                        name="ID"
                        placeholder="ID 입력"
                    />
                    <InputBox
                        onChange={updatePassword}
                        type="password"
                        name="PW"
                        placeholder="password 입력"
                    />
                </VerticalWrapper>
                <HorizontalWrapper width="100%" justifyContent="space-between">
                    <ButtonBox
                        text="Back"
                        type=""
                        width="185px"
                        height="35px"
                        fontSize="15px"
                    />
                    <ButtonBox
                        text="Join"
                        // type="/join"
                        width="185px"
                        height="35px"
                        fontSize="15px"
                    />
                </HorizontalWrapper>
            </VerticalWrapper>
        </VerticalWrapper>
    );
}

export default JoinPage;