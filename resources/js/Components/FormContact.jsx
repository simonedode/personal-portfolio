import '@material/web/textfield/outlined-text-field';
import '@material/web/button/filled-button'
import '@material/web/dialog/dialog';
import {mdiCheckCircle, mdiClose, mdiSend} from "@mdi/js";
import Icon from "@mdi/react";
import {useForm} from "@inertiajs/react";
import {useEffect, useState} from "react";
import {TextField} from "@mui/material";

export default function FormContact() {

    const [isSuccess, setSuccess] = useState(false);

    const { data, setData, post, errors, reset } = useForm({
        email: '',
        subject: '',
        body: '',
    })

    useEffect(() => {
        if (!isSuccess) {
            document.querySelector('#dialog-success').close();
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/', {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                setSuccess(true);
                reset('email', 'subject', 'body')
            },
            onError: () => {
                setSuccess(false);
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
            <md-filled-button label="SEND" hasIcon onClick={handleSubmit}>
                <Icon slot="icon" path={mdiSend} size={1}/>
            </md-filled-button>
            <md-dialog open={isSuccess} id="dialog-success">
                <div className="dialog-header" slot="header">
                    Message sent with success
                </div>
                <div className="onSuccess">
                    <Icon id="icon-success" path={mdiCheckCircle} size={4} />
                </div>
                <div slot="footer">
                    <md-filled-button label="CLOSE" hasIcon onClick={() => setSuccess(false)} dialogAction dialogFocus >
                        <Icon slot="icon" path={mdiClose} size={1}/>
                    </md-filled-button>
                </div>
            </md-dialog>
        </form>
    )

}
