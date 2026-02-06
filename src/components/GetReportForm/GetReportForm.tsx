import {useState, useImperativeHandle, forwardRef} from 'react';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import styles from './GetReportForm.module.scss';
import mailIcon from '../../assets/icons/mail.svg';
import checkboxCheckedIcon from '../../assets/icons/checkbox-empty.svg'; // The asset name is confusing, but it contains the checked state

const schema = z.object({
	email: z.string().email('Please enter a valid email address'),
	agreed: z.boolean().refine(val => val === true, {
		message: 'You must agree to the terms and conditions',
	}),
});

type FormData = z.infer<typeof schema>;

interface GetReportFormProps {
	onGetReport: (data: FormData) => void;
}

export interface GetReportFormRef {
	focusInput: () => void;
}

export const GetReportForm = forwardRef<GetReportFormRef, GetReportFormProps>(({onGetReport}, ref) => {
	const [emailInputElement, setEmailInputElement] = useState<HTMLInputElement | null>(null);

	const {
		register,
		handleSubmit,
		watch,
		setValue,
		formState: {errors},
	} = useForm<FormData>({
		mode: 'onChange', // Validate on change to disable button or show errors
		resolver: zodResolver(schema),
		defaultValues: {
			email: '',
			agreed: false, // Start unchecked
		},
	});

	const isAgreed = watch('agreed');

	const onSubmit = (data: FormData) => {
		onGetReport(data);
	};

	const toggleCheckbox = () => {
		setValue('agreed', !isAgreed, {shouldValidate: true});
	};

	// Expose focus method to parent
	useImperativeHandle(ref, () => ({
		focusInput: () => {
			emailInputElement?.focus();
		}
	}));

	// Merge refs from react-hook-form register and our custom ref
	const {ref: emailRegisterRef, ...emailRegisterProps} = register('email');

	const mergeRefs = (el: HTMLInputElement | null) => {
		setEmailInputElement(el);
		emailRegisterRef(el);
	};

	return (
		<form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
			<p className={styles.title}>Ensure your data is secure with your report.</p>
			<p className={styles.subtitle}>Where should we send your report?</p>

			<div className={`${styles.inputGroup} ${errors.email ? styles.error : ''}`}>
				<img src={mailIcon} alt="Mail" className={styles.inputIcon}/>
				<input
					type="email"
					placeholder="Enter your email"
					className={styles.input}
					{...emailRegisterProps}
					ref={mergeRefs}
				/>
			</div>
			{(errors.email || errors.agreed) && (
				<div className={styles.errorMessage}>
					{errors.email?.message || errors.agreed?.message}
				</div>
			)}

			<button type="submit" className={styles.submitButton}>
				GET REPORT
			</button>

			<div className={styles.checkboxGroup} onClick={toggleCheckbox}>
				<input
					type="checkbox"
					{...register('agreed')}
					className={styles.checkboxInput}
				/>
				<div className={styles.checkboxCustom}>
					{isAgreed ? (
						<img src={checkboxCheckedIcon} alt="Checked" style={{width: '100%', height: '100%'}}/>
					) : (
						<div className={styles.checkboxEmpty}/>
					)}
				</div>
				<span className={styles.checkboxLabel}>I agree to the terms and conditions</span>
			</div>
		</form>
	);
});

GetReportForm.displayName = 'GetReportForm';
