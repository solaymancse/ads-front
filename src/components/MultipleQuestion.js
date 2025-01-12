import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


// asnwers is a list of subsections with corresponding answer
// if answers is of size 1, may need to handle that differently

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
                    <div className="font-semibold text-lg">{question}</div>
                </AccordionSummary>
                <AccordionDetails className="px-4 pb-4">
                    <Typography className="text-sm text-gray-700">
                        {answer}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};