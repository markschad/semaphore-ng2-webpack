/**
 * Represents a dynamic question.
 */
export interface DynamicQuestion {
    controlType: string;
    id: string;
    label: string;
    options?: Array<any>;
    required: boolean;
    type?: string;
    value?: any;
}
