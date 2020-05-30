import { View, Panel } from '@vkontakte/vkui';
import bridge from '@vkontakte/vk-bridge';

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import MainHeader from './../components/MainHeader';
import ItemsList from './../components/ItemList/ItemsList';
import AddNewTaskModal from './../components/AddNewTaskModal';

import { selectTask } from './../store/reducers';
import { taskActions } from './../store/actions';

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

const App = ({ taskData, addNewTask }) => {
    const [activePanel, setActivePanel] = useState('main');
    const [activeModal, setActiveModal] = useState(null);

    const go = (e) => setActivePanel(e.currentTarget.dataset.to);

    const handlerAddTask = () => setActiveModal('addTask');
    const handlerCloseModal = () => setActiveModal(null);
    const handlerSelectRepeat = () => setActiveModal('selectRepeat');
    const handlerCloseSelectRepeat = () => setActiveModal('addTask');
    const handlerSaveTask = (data) => {
        addNewTask(data);
        handlerCloseModal();
    };

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
                <ItemsList itemHabits={taskData} />
            </Panel>
        </View>
    );
};

const mapStatetoProps = (state) => ({
    taskData: selectTask.getTask(state),
});

const mapDispatchToProps = (dispatch) => {
    return {
        addNewTask: (data) => dispatch(taskActions.addTask(data)),
    };
};
export default connect(mapStatetoProps, mapDispatchToProps)(App);
