import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col } from "antd";
import { Input, Icon, Button, Link } from "../../../components";
import { newName, newAge } from "../../../redux/reducers/membersReducer";
import {
    postMembersAPI,
    getMembersIdAPI,
} from "../../../apis/members/membersAPI";
import "../../lessons/one/LessonOne.scss";

const MemberOne = (props) => {
    const memberId = Number(props.match.params.memberId);

    const dispatch = useDispatch();
    const name = useSelector((state) => state.members.members[0].name);
    const age = useSelector((state) => state.members.members[0].age);

    const newMember = useSelector((state) => state.members.newMember);

    const updateInputValue = (e) => {
        let value = e.target.value;
        switch (e.target.id) {
            case "name":
                dispatch(newName({ name: value }));
                break;
            case "age":
                dispatch(newAge({ age: value }));
                break;
        }
    };

    const renderInputs = () => {
        let inputValues = [
            {
                id: "name",
                type: "text",
                value: name,
                name: "Name",
                placehoder: name,
            },
            {
                id: "age",
                type: "number",
                value: age,
                name: "Age",
                placehoder: age,
            },
        ];

        return inputValues.map((input, index) => (
            <Input
                key={index}
                id={input.id}
                type={input.type}
                value={input.value}
                name={input.name}
                placeholder={input.placehoder}
                onChange={updateInputValue}
            />
        ));
    };
    getMembersIdAPI(memberId);
    const updateMember = () => {
        let member = {
            name: name,
            age: age,
        };
        console.log("member :>> ", member);
        // patchMembersAPI(id, name, age); // 특정 멤버 수정

        // dispatch(addMember({ newMember: member }));
    };
    return (
        <Row className="LessonOne">
            <Col span={24}>
                <Col className="header" span={24}>
                    <Link
                        to="/members"
                        type="none"
                        label={<Icon icon="back" />}
                    />
                    <span className="title">{`Member One`}</span>
                </Col>
                <Col className="body" span={24}>
                    {renderInputs()}
                </Col>
                <Col className="footer" span={24}>
                    <Button
                        className="btn-delete"
                        type="danger"
                        label="DELETE"
                        // to = "/lessons"해야해서 Link로 바꾸는게 어떤지
                        // onClick={deleteLesson}
                    />
                    <Button
                        // className="btn-register"
                        label="UPDATE"
                        onClick={updateMember}
                    />
                </Col>
            </Col>
        </Row>
    );
};

export default MemberOne;
