import { redirect } from 'next/navigation';

export default function CreateUserPage() {
  redirect('/admin/users');
}