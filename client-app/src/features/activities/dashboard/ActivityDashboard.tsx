import {Grid} from "semantic-ui-react";
import ActivityList from './ActivityList.tsx';
import ActivityDetails from '../details/ActivityDetails.tsx';
import ActivityForm from '../form/ActivityForm.tsx';
import {observer} from 'mobx-react-lite';
import {useStore} from '../../../app/stores/store.ts';

export default observer(function ActivityDashboard() {
    const {activityStore} = useStore();
    const {selectedActivity, editMode} = activityStore;
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList/>
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedActivity && !editMode && <ActivityDetails/>}
                {editMode && <ActivityForm/>}
            </Grid.Column>
        </Grid>
    )
})
