import { View, Panel } from '@vkontakte/vkui';
import bridge from '@vkontakte/vk-bridge';

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import MainHeader from './../components/MainHeader';
import ItemsList from './../components/ItemList/ItemsList';

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

    useScheme();
    const go = (e) => setActivePanel(e.currentTarget.dataset.to);

    return (
        <View activePanel={activePanel}>
            <Panel id="main">
                <MainHeader />
                <ItemsList
                    itemHabits={[{ name: '123123213' }, { name: 'ghbdsxrf 2' }]}
                />
            </Panel>
        </View>
    );
};

const mapStatetoProps = (state) => {};
const mapDispatchToProps = (dispatch) => {};

export default connect(mapStatetoProps, mapDispatchToProps)(App);
