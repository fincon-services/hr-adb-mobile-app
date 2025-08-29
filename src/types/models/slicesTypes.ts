import { FormCategory } from '../../interfaces/FormQuestions';
import { store } from '../../store/configureStore';

export type RootState = ReturnType<typeof store.getState>;
