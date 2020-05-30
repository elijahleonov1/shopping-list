import { View, Panel } from '@vkontakte/vkui';
import bridge from '@vkontakte/vk-bridge';

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import MainHeader from './../components/MainHeader';
import ItemsList from './../components/ItemList/ItemsList';
import AddNewTaskModal from './../components/AddNewTaskModal';

const useScheme = () => {
    useEffect(() => {
        bridge.subscribe(({ detail: { type, data } }) => {
            if (type === 'VKWebAppUpdateConfig') {
                const schemeAttribute = document.createAttribute('scheme');
                schemeAttribute.value = data.scheme
                    ? data.scheme
                    : 'client_light';
                document.body.attributes.setNamedItem(schemeAttribute);
            }
        });
    }, []);
};

const App = () => {
    const [activePanel, setActivePanel] = useState('main');
    const [activeModal, setActiveModal] = useState(null);

    const go = (e) => setActivePanel(e.currentTarget.dataset.to);
    const handlerAddTask = () => setActiveModal('addTask');
    const handlerCloseModal = () => setActiveModal(null);
    const handlerSelectRepeat = () => setActiveModal('selectRepeat');
    const handlerCloseSelectRepeat = () => setActiveModal('addTask');
    const handlerSaveTask = () => {};

    useScheme();

    return (
        <View
            activePanel={activePanel}
            modal={
                <AddNewTaskModal
                    activeModal={activeModal}
                    closeModal={handlerCloseModal}
                    saveTask={handlerSaveTask}
                    selectRepeat={handlerSelectRepeat}
                    closeSelectRepeat={handlerCloseSelectRepeat}
                />
            }
        >
            <Panel id="main">
                <MainHeader addTask={handlerAddTask} />
                <ItemsList
                    itemHabits={[
                        { name: 'Привычка №1' },
                        { name: 'Привычка №2' },
                        { name: 'Привычка №3' },
                    ]}
                />
            </Panel>
        </View>
    );
};

const mapStatetoProps = (state) => {};
const mapDispatchToProps = (dispatch) => {};

export default connect(mapStatetoProps, mapDispatchToProps)(App);
