import PageHeader from "@/components/layout/PageHeader";

import ProfileSettings from "@/components/settings/profile/ProfileSettings";
import SecuritySettings from "@/components/settings/security/SecuritySettings";
import PreferencesSettings from "@/components/settings/preferences/PreferencesSettings";
import NotificationSettings from "@/components/settings/notifications/NotificationSettings";

export default function SettingsPage() {
  return (
    <div className="space-y-8">

      <PageHeader
        title="Settings"
        description="Manage your account, preferences and notification settings."
      />

      <ProfileSettings />

      <SecuritySettings />

      <PreferencesSettings />

      <NotificationSettings />

    </div>
  );
}
