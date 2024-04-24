import swal from 'sweetalert';

export const invalidInputSwal = (text: string) => {
  swal({
    title: 'Invalid', 
    text, 
    icon: 'warning'
  });
};