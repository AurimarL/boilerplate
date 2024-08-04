import { Button } from "@/components/ui/button";
import { GetAllOrganizations } from "@/services";

async function HandleClick() {
  "use server"
  const organization = await GetAllOrganizations();
  console.log(organization)
}

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <form action={HandleClick}>
        <Button type="submit">Click</Button>
      </form>
    </main>
  );
}
