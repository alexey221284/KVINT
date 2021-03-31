import React, {useState} from 'react';
import {ComponentWrapper, CheckBoxBlock, Title} from './index.styled';

import '../../styles/style.less';
import {Switch} from 'antd';

const TestComponent: React.FC = () => {

    let [numberSwitch, setNumberSwitch] = useState(0);
    let [title, setTitle] = useState("Нет");

    function onChange() {
        setNumberSwitch(numberSwitch + 1);

        if (numberSwitch == 0) {
            setNumberSwitch(1)
            setTitle('Да')
        }

        if (numberSwitch == 1) {
            setNumberSwitch(0)
            setTitle('Нет')
        }
    }

    return <ComponentWrapper>
        <CheckBoxBlock>
            <Title>{title}</Title>
            <Switch onChange={onChange}/>
        </CheckBoxBlock>
    </ComponentWrapper>;
};

export default TestComponent;
