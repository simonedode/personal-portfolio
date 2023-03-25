import '@material/web/textfield/outlined-text-field';
import '@material/web/button/filled-button'
import {mdiCheck, mdiCheckBold, mdiCheckCircle, mdiSend} from "@mdi/js";
import Icon from "@mdi/react";
import {useForm} from "@inertiajs/react";
import {useState} from "react";
import {TextField} from "@mui/material";

export default function FormContact() {

    const [isSuccess, setSuccess] = useState(false);

    const { data, setData, post, errors, reset } = useForm({
        email: '',
        subject: '',
        body: '',
    })


    const handleSubmit = (e) => {
        e.preventDefault();
        post('/', {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                setSuccess(true);
                reset('email', 'subject', 'body')
            }
        });
    }

    const handleChange = (e) => {
        setData(e.target.id, e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <md-outlined-text-field type="email" id="email" placeholder="yourEmail@example.com" label="EMAIL" error={errors.email}
                                    errorText={errors.email} required value={data.email} onInput={handleChange}/>
            <md-outlined-text-field label="SUBJECT" id="subject" required error={errors.subject} errorText={errors.subject}
                                    value={data.subject} onInput={handleChange}/>
            {/*Waiting textField multiline/textarea of m3*/}
            <TextField style={{"marginBottom": "16px"}} id="body" label="BODY*" color="" fullWidth error={!!errors.body} helperText={errors.body}
                       multiline minRows={3} value={data.body} onInput={handleChange}/>
            {/*TODO: change with a button [type="submit"]*/}
            <md-filled-button label="SEND" hasIcon="true" onClick={handleSubmit}>
                <Icon slot="icon" path={mdiSend} size={1}/>
            </md-filled-button>
            {/*TODO: put a dialog for confirmation*/}
            {isSuccess && <div className="onSuccess">
                             Message sent with success <Icon id="icon-success" path={mdiCheckCircle} size={1} />
                          </div>}
        </form>
    )

}
