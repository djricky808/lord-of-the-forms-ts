import { TUserInformation } from "./types";

export const InfoRow = ({
  label,
  value,
}: {
  label: string;
  value: string | null;
}) => {
  return (
    <div>
      <span style={{ marginRight: 5 }}>
        <b>{label}:</b>
      </span>
      <span>{value}</span>
    </div>
  );
};
export const ProfileInformation = ({
  userData,
}: {
  userData: TUserInformation | null;
}) => {
  if (!userData) {
    return (
      <>
        <u>
          <h3>Your Submitted User Information</h3>
        </u>
        <div className="user-info">
          <div>No information provided</div>
        </div>
      </>
    );
  }
  const { email, firstName, lastName, phone, city } = userData;
  return (
    <>
      <u>
        <h3>Your Submitted User Information</h3>
      </u>
      <div className="user-info">
        <InfoRow label="Email" value={email} />
        <InfoRow
          label="First Name"
          value={firstName.slice(0, 1).toUpperCase() + firstName.slice(1)}
        />
        <InfoRow
          label="Last Name"
          value={lastName.slice(0, 1).toUpperCase() + lastName.slice(1)}
        />
        <InfoRow
          label="City"
          value={city.slice(0, 1).toUpperCase() + city.slice(1)}
        />
        {/* You will need to format the string "nnnnnnn" as "nn-nn-nn-n" */}
        {phone !== null && (
          <InfoRow
            label="Phone"
            value={`${phone[0]}-${phone[1]}-${phone[2]}-${phone[3]}`}
          />
        )}
      </div>
    </>
  );
};
