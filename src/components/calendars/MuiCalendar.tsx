import { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { 
  Paper, 
  Typography, 
  Box, 
  Button, 
  TextField, 
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Zoom,
  Chip
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { format, isSameDay } from 'date-fns';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import { motion, AnimatePresence } from 'framer-motion';

// Types
interface WeddingEvent {
  id: string;
  title: string;
  date: Date;
  time: string;
  venue: string;
  type: 'ceremony' | 'reception' | 'other';
  notes?: string;
}

// Styled Components
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: '12px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    boxShadow: '0 8px 12px rgba(0, 0, 0, 0.15)',
  },
  '& .MuiPickersCalendarHeader-root': {
    color: 'var(--color-primary-red)',
  },
  '& .MuiPickersDay-root.Mui-selected': {
    backgroundColor: 'var(--color-primary-red) !important',
    '&:hover': {
      backgroundColor: 'var(--color-primary-red) !important',
      opacity: 0.8,
    },
  },
  '& .MuiPickersDay-root.Mui-selected:hover': {
    backgroundColor: 'var(--color-primary-red) !important',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'var(--color-primary-red)',
  color: 'white',
  '&:hover': {
    backgroundColor: 'var(--color-primary-red)',
    opacity: 0.9,
  },
  marginTop: theme.spacing(2),
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
}));

const EventChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  backgroundColor: 'var(--color-primary-red)',
  color: 'white',
  '&:hover': {
    backgroundColor: 'var(--color-primary-red)',
    opacity: 0.9,
  },
}));

const MuiCalendar = () => {
  const [events, setEvents] = useState<WeddingEvent[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [newEvent, setNewEvent] = useState<Partial<WeddingEvent>>({
    title: '',
    time: '',
    venue: '',
    type: 'ceremony',
    notes: '',
  });

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleAddEvent = () => {
    if (selectedDate && newEvent.title && newEvent.time && newEvent.venue) {
      const event: WeddingEvent = {
        id: Date.now().toString(),
        title: newEvent.title,
        date: selectedDate,
        time: newEvent.time,
        venue: newEvent.venue,
        type: newEvent.type as 'ceremony' | 'reception' | 'other',
        notes: newEvent.notes,
      };
      setEvents([...events, event]);
      setOpenDialog(false);
      setNewEvent({
        title: '',
        time: '',
        venue: '',
        type: 'ceremony',
        notes: '',
      });
    }
  };

  const handleDeleteEvent = (eventId: string) => {
    setEvents(events.filter(event => event.id !== eventId));
  };

  const getEventsForDate = (date: Date) => {
    return events.filter(event => isSameDay(event.date, date));
  };

  return (
    <Box className="max-w-4xl mx-auto p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography 
          variant="h4" 
          className="text-center mb-6 text-[var(--color-primary-red)] font-light tracking-widest"
        >
          Wedding Events Calendar
        </Typography>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <StyledPaper>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateCalendar
              value={selectedDate}
              onChange={handleDateChange}
              minDate={new Date()}
              maxDate={new Date(2025, 11, 31)}
              sx={{
                '& .MuiPickersDay-root': {
                  '&.Mui-selected': {
                    backgroundColor: 'var(--color-primary-red)',
                    '&:hover': {
                      backgroundColor: 'var(--color-primary-red)',
                    },
                  },
                },
              }}
            />
          </LocalizationProvider>
        </StyledPaper>

        <StyledPaper>
          <Typography variant="h6" className="mb-4 text-[var(--color-primary-red)]">
            {selectedDate ? format(selectedDate, 'MMMM d, yyyy') : 'Select a date'}
          </Typography>
          
          <AnimatePresence>
            {selectedDate && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Box className="mb-4">
                  {getEventsForDate(selectedDate).map(event => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="mb-2 p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <Typography variant="subtitle1" className="font-semibold">
                            {event.title}
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            {event.time} at {event.venue}
                          </Typography>
                          {event.notes && (
                            <Typography variant="body2" className="mt-1">
                              {event.notes}
                            </Typography>
                          )}
                        </div>
                        <IconButton
                          size="small"
                          onClick={() => handleDeleteEvent(event.id)}
                          className="text-[var(--color-primary-red)]"
                        >
                          <CloseIcon />
                        </IconButton>
                      </div>
                    </motion.div>
                  ))}
                </Box>
              </motion.div>
            )}
          </AnimatePresence>

          <StyledButton
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => setOpenDialog(true)}
            fullWidth
          >
            Add Event
          </StyledButton>
        </StyledPaper>
      </div>

      <Dialog 
        open={openDialog} 
        onClose={() => setOpenDialog(false)}
        TransitionComponent={Zoom}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          Add Wedding Event
          <IconButton
            onClick={() => setOpenDialog(false)}
            className="absolute right-2 top-2"
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Box className="space-y-4 mt-4">
            <TextField
              fullWidth
              label="Event Title"
              value={newEvent.title}
              onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
            />
            <TextField
              fullWidth
              label="Time"
              type="time"
              value={newEvent.time}
              onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              fullWidth
              label="Venue"
              value={newEvent.venue}
              onChange={(e) => setNewEvent({ ...newEvent, venue: e.target.value })}
            />
            <TextField
              fullWidth
              label="Event Type"
              select
              value={newEvent.type}
              onChange={(e) => setNewEvent({ ...newEvent, type: e.target.value as 'ceremony' | 'reception' | 'other' })}
              SelectProps={{
                native: true,
              }}
            >
              <option value="ceremony">Ceremony</option>
              <option value="reception">Reception</option>
              <option value="other">Other</option>
            </TextField>
            <TextField
              fullWidth
              label="Notes"
              multiline
              rows={3}
              value={newEvent.notes}
              onChange={(e) => setNewEvent({ ...newEvent, notes: e.target.value })}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <StyledButton onClick={handleAddEvent}>Add Event</StyledButton>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default MuiCalendar; 