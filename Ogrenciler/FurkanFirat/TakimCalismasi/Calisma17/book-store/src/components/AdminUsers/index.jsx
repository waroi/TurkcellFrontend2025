import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  loadUsers,
  deleteUser,
  updateUser,
} from "../../redux/slices/usersSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faTrash,
  faEdit,
  faSave,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

export default function AdminUsers() {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);

  const [editingUserId, setEditingUserId] = useState(null);

  const [editingUserData, setEditingUserData] = useState({
    role: "",
    publisher: "",
  });

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  const handleStartEdit = (user) => {
    setEditingUserId(user.id);
    setEditingUserData({
      role: user.role || "",
      publisher: user.publisher || "",
    });
  };

  const handleChange = (e) => {
    setEditingUserData({
      ...editingUserData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = (userId) => {
    dispatch(
      updateUser({
        userId,
        updatedData: editingUserData,
      })
    );
    setEditingUserId(null);
    setEditingUserData({ role: "", publisher: "" });
  };

  const handleCancel = () => {
    setEditingUserId(null);
    setEditingUserData({ role: "", publisher: "" });
  };

  const handleDelete = (userId) => {
    dispatch(deleteUser(userId));
  };

  if (loading) {
    return <div>Loading Users...</div>;
  }

  if (error) {
    return <div className="text-danger">Error: {error}</div>;
  }

  return (
    <div className="bg-white rounded-3 p-4 shadow-sm">
      <div className="d-flex align-items-center mb-3">
        <FontAwesomeIcon
          icon={faUsers}
          className="text-orange me-2"
          size="lg"
        />
        <h4 className="m-0 text-orange">User Management</h4>
      </div>

      {users && users.length > 0 ? (
        <div className="table-responsive">
          <table className="table align-middle">
            <thead className="table-light">
              <tr>
                <th>User ID</th>
                <th>Email</th>
                <th>Role</th>
                <th>Publisher</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => {
                const isEditing = editingUserId === u.id;
                return (
                  <tr key={u.id}>
                    <td>{u.id}</td>
                    <td>{u.email}</td>
                    <td>
                      {isEditing ? (
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          name="role"
                          value={editingUserData.role}
                          onChange={handleChange}
                        />
                      ) : (
                        u.role || "-"
                      )}
                    </td>
                    <td>
                      {isEditing ? (
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          name="publisher"
                          value={editingUserData.publisher}
                          onChange={handleChange}
                        />
                      ) : (
                        u.publisher || "-"
                      )}
                    </td>
                    <td>
                      {isEditing ? (
                        <>
                          <button
                            className="btn btn-sm btn-success me-2"
                            onClick={() => handleSave(u.id)}
                          >
                            <FontAwesomeIcon icon={faSave} />
                          </button>
                          <button
                            className="btn btn-sm btn-secondary"
                            onClick={handleCancel}
                          >
                            <FontAwesomeIcon icon={faTimes} />
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            className="btn btn-sm rounded-circle edit-button"
                            onClick={() => handleStartEdit(u)}
                          >
                            <FontAwesomeIcon icon={faEdit} color="#ff8a00" />
                          </button>
                          <button
                            className="btn btn-sm rounded-circle delete-button"
                            onClick={() => handleDelete(u.id)}
                          >
                            <FontAwesomeIcon icon={faTrash} color="#d9534f" />
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div>No users found.</div>
      )}
    </div>
  );
}
