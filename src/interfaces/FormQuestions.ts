export interface FormQuestion {
  id: string;
  question: string;
  fieldType: 'text' | 'radio' | 'number' | 'textInput' | 'numberInput';

  options?: string[]; // for radios, checkboxes, dropdowns
  answer?: string | string[]; // user’s answer
  required?: boolean;
}

export interface FormSubtype {
  id: string;
  name: string;
  // fieldType: string;
  questions: FormQuestion[];
}

export interface FormCategory {
  id: string;
  name: 'Medicine' | 'Staff' | 'Equipments' | 'Infrastructure';
  subtypes: Record<string, FormSubtype>; // key = subtype id
}

export interface HospitalFormState {
  hospitals: Record<string, Record<string, FormCategory>>; // hospitalId -> formCategoryId -> FormCategory
  currentHospitalId: string | null;
  currentFormCategoryId: string | null;
  currentSubtypeId: string | null;
  currentQuestionIndex: number;
  forms: object | null;
}

export interface BaseFieldProps {
  // value: string | undefined | string[];
  onChange: (questionId: string, value: string) => void;
  questionItem: FormQuestion;
}
