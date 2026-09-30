export default function SignalTable() {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-800">
      <table className="w-full">
        <thead className="bg-slate-900">
          <tr>
            <th className="p-4 text-left">Pair</th>
            <th className="p-4 text-left">Direction</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-left">Confluence</th>
            <th className="p-4 text-left">Published</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="p-4 text-slate-400" colSpan={6}>
              No signals available.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
