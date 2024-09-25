'use server';

export async function createEventAction(
  prevState: { message: string },
  formData: FormData,
) {
  const image = formData.get('image');
  const data = {
    title: formData.get('eventTitle'),
    description: formData.get('description'),
    location: formData.get('location'),
    category: formData.get('eventType'),
    start_date: formData.get('start_date'),
    end_date: formData.get('end_date'),
    start_time: formData.get('start_time'),
    end_time: formData.get('end_time'),
    image_url: '',
  };
  console.log({ data });
  console.log(image);
  return { message: '' };
}
