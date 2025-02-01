import {Grid} from "semantic-ui-react";
import ActivityList from './ActivityList.tsx';
import {observer} from 'mobx-react-lite';
import {useStore} from '../../../app/stores/store.ts';
import {useEffect} from 'react';
import LoadingComponent from '../../../app/layout/LoadingComponent.tsx';

export default observer(function ActivityDashboard() {
    const {activityStore} = useStore();
    const {loadActivities, activityRegistry} = activityStore;

    useEffect(() => {
        if (activityRegistry.size <= 1) loadActivities();
    }, [loadActivities, activityRegistry]);

    if (activityStore.loadingInitial) return <LoadingComponent content='Loading app...'/>

    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList/>
            </Grid.Column>
            <Grid.Column width='6'>
               <h2>Activity filters</h2>
            </Grid.Column>
        </Grid>
    )
})
