import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';

import {
    ModalRoot,
    ModalPage,
    ModalPageHeader,
    FormLayout,
    PanelHeaderButton,
    FormLayoutGroup,
    Input,
    SelectMimicry,
    Radio,
} from '@vkontakte/vkui';

const Wrapper = styled.div`
    height: 200px;
`;

const AddNewTaskModal = ({
    activeModal,
    closeModal,
    saveTask,
    selectRepeat,
    closeSelectRepeat,
}) => {
    const [selectValue, setSelectValue] = useState(0);

    const selectRepeatData = [
        { id: 1, title: 'Каждый день', isActive: true },
        { id: 2, title: 'Каждую неделю', isActive: false },
        { id: 3, title: '2 раза в неделю', isActive: false },
        { id: 4, title: '5 раза в неделю', isActive: false },
    ];

    const [selectRepeatConteant, setSelectRepeatConteant] = useState(
        selectRepeatData
    );

    const checkedSelectOpt = (id) => {
        const t = selectRepeatData.map((item) => ({
            ...item,
            isActive: id === item.id,
        }));
        setSelectRepeatConteant(t);
    };

    return (
        <ModalRoot activeModal={activeModal} onClose={closeModal}>
            <ModalPage
                id="addTask"
                onClose={closeModal}
                header={
                    <ModalPageHeader
                        right={
                            <PanelHeaderButton onClick={saveTask}>
                                Готово
                            </PanelHeaderButton>
                        }
                    >
                        Добавить привычку
                    </ModalPageHeader>
                }
            >
                <FormLayout>
                    <FormLayoutGroup>
                        <Input placeholder="Название" />
                        <SelectMimicry top="Повторять" onClick={selectRepeat}>
                            Каждый день
                        </SelectMimicry>
                    </FormLayoutGroup>
                </FormLayout>
                <Wrapper />
            </ModalPage>
            <ModalPage
                id="selectRepeat"
                onClose={closeSelectRepeat}
                header={
                    <ModalPageHeader
                        right={
                            <PanelHeaderButton onClick={closeSelectRepeat}>
                                Готово
                            </PanelHeaderButton>
                        }
                    >
                        Повторять
                    </ModalPageHeader>
                }
            >
                <FormLayoutGroup>
                    {selectRepeatConteant.map(({ id, title, isActive }) => {
                        return (
                            <Radio
                                key={id}
                                name="country"
                                value={id}
                                defaultChecked={isActive}
                                onClick={() => checkedSelectOpt(id)}
                            >
                                {title}
                            </Radio>
                        );
                    })}
                </FormLayoutGroup>
                <Wrapper />
            </ModalPage>
        </ModalRoot>
    );
};

AddNewTaskModal.propTypes = {};

export default AddNewTaskModal;
