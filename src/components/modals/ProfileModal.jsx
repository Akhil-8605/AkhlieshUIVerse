import React, { useState } from 'react';
import '../../styles/modals.css';

// ProfileModal component renders user profile info from JSON config
// Note: Actions only trigger close/callbacks, no direct method execution
const ProfileModal = ({ isOpen, onClose, profile = {}, onActionClick = null }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className={`modal-overlay ${isClosing ? 'closing' : ''}`}
        onClick={handleClose}
      />

      {/* Modal Container */}
      <div className={`modal-container ${isClosing ? 'closing' : ''}`}>
        <div className="profile-modal">
          {/* Header */}
          <div className="modal-header">
            <h2 className="modal-title">{profile.title || 'User Profile'}</h2>
            <button
              className="modal-close-btn"
              onClick={handleClose}
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>

          {/* Body */}
          <div className="modal-body">
            {/* Avatar Section */}
            {profile.avatar && (
              <div className="profile-avatar-section">
                <img
                  src={profile.avatar}
                  alt="Profile avatar"
                  className="profile-avatar"
                />
              </div>
            )}

            {/* Profile Fields */}
            {profile.fields && profile.fields.length > 0 && (
              <div className="profile-fields">
                {profile.fields.map((field, index) => (
                  <div key={index} className="profile-field">
                    <span className="profile-field-label">
                      {field.label}:
                    </span>
                    <span className="profile-field-value">
                      {field.value}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Description */}
            {profile.description && (
              <div className="profile-description">
                <p>{profile.description}</p>
              </div>
            )}

            {/* Stats Grid */}
            {profile.stats && profile.stats.length > 0 && (
              <div className="profile-stats">
                {profile.stats.map((stat, index) => (
                  <div key={index} className="profile-stat-item">
                    <div className="profile-stat-value">
                      {stat.value}
                    </div>
                    <div className="profile-stat-label">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer with Actions */}
          {profile.actions && profile.actions.length > 0 && (
            <div className="modal-footer">
              {profile.actions.map((action, index) => (
                <button
                  key={index}
                  className={`modal-action-btn ${action.variant || 'secondary'}`}
                  onClick={() => {
                    // Only handle closeOnClick - action handlers are defined at container level
                    if (onActionClick) {
                      onActionClick(action.id || action.label);
                    }
                    if (action.closeOnClick) {
                      handleClose();
                    }
                  }}
                >
                  {action.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProfileModal;
