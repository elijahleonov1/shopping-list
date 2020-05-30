import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Group, CellButton, Cell, Div } from '@vkontakte/vkui';
import Icon24DoneOutline from '@vkontakte/icons/dist/24/done_outline';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import Icon24MoreVertical from '@vkontakte/icons/dist/24/more_vertical';

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
`;

const ItemName = styled.div`
    display: flex;
    width: 50%;
    max-height: 70px;

    overflow: hidden;
    white-space: break-spaces;
    text-overflow: ellipsis;
`;

const RightIcons = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 50%;
`;

const ItemIcon = styled.div`
    width: 50px;
`;

const ItemsList = ({ itemHabits = [] }) => {
    const itemsList = itemHabits.map((item, key) => (
        <Cell key={key} before={<Icon24MoreVertical />}>
            <Wrapper>
                <ItemName>{item.name}</ItemName>

                <RightIcons>
                    <ItemIcon>
                        <Icon24DoneOutline />
                    </ItemIcon>
                    <ItemIcon>
                        <Icon24DoneOutline />
                    </ItemIcon>
                    <ItemIcon>
                        <Icon24Cancel />
                    </ItemIcon>
                    <ItemIcon>
                        <Icon24Cancel />
                    </ItemIcon>
                </RightIcons>
            </Wrapper>
        </Cell>
    ));

    return <Group>{itemsList}</Group>;
};

ItemsList.propTypes = {
    itemHabits: PropTypes.array,
};

export default ItemsList;
