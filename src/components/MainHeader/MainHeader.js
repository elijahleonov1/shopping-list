import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    PanelHeader,
    PanelHeaderSubmit,
    PanelHeaderContent,
    PanelHeaderContext,
    Div,
    List,
    Cell,
} from '@vkontakte/vkui';
import Icon24Dropdown from '@vkontakte/icons/dist/24/dropdown';
import Icon28AddOutline from '@vkontakte/icons/dist/28/add_outline';

const MainHeader = ({ addTask }) => {
    const [isOpneSubMenu, setIsOpneSubMenu] = useState(false);
    const toogleSubMenu = () => setIsOpneSubMenu(!isOpneSubMenu);
    return (
        <>
            <PanelHeader
                right={
                    <PanelHeaderSubmit onClick={addTask}>
                        <Div>
                            <Icon28AddOutline />
                        </Div>
                    </PanelHeaderSubmit>
                }
            >
                <PanelHeaderContent
                    aside={
                        <Div>
                            <Icon24Dropdown
                                style={{
                                    transform: `rotate(${
                                        isOpneSubMenu ? '180deg' : '0'
                                    })`,
                                }}
                            />
                        </Div>
                    }
                    onClick={toogleSubMenu}
                >
                    Трекер привычек
                </PanelHeaderContent>
            </PanelHeader>
            <PanelHeaderContext opened={isOpneSubMenu} onClose={toogleSubMenu}>
                <List>
                    <Cell>О приложении</Cell>
                </List>
            </PanelHeaderContext>
        </>
    );
};

MainHeader.propTypes = {
    addTask: PropTypes.func.isRequired,
};

export default MainHeader;
