import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function Question({ question, answer }) {
    return (
        <div className="border-b border-gray-300 last:border-none">
            <Accordion className="shadow-none" disableGutters>
                <AccordionSummary
                    expandIcon={<ArrowDropDownIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    className="flex justify-between items-center py-4"
                >
                    <p className="font-semibold">{question}</p>
                </AccordionSummary>
                <AccordionDetails className="px-4 pb-4">
                    <small>
                        {answer}
                    </small>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};
