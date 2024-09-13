import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Extension {
  id: string;
  name: string;
  description: string;
  installed: boolean;
}

const MarketplaceComponent: React.FC = () => {
  const [extensions, setExtensions] = useState<Extension[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExtensions = async () => {
      try {
        const response = await axios.get('/api/v1/extensions');
        setExtensions(response.data);
      } catch (err) {
        setError('Failed to load extensions');
      } finally {
        setLoading(false);
      }
    };

    fetchExtensions();
  }, []);

  const handleInstall = async (id: string) => {
    try {
      await axios.post(`/api/v1/extensions/${id}/install`);
      setExtensions((prevExtensions) =>
        prevExtensions.map((ext) =>
          ext.id === id ? { ...ext, installed: true } : ext
        )
      );
    } catch (err) {
      setError('Failed to install extension');
    }
  };

  const handleManage = (id: string) => {
    // Logic to manage the extension
    console.log(`Managing extension with id: ${id}`);
  };

  if (loading) return <div>Loading extensions...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Marketplace Extensions</h1>
      <ul>
        {extensions.map((extension) => (
          <li key={extension.id}>
            <h2>{extension.name}</h2>
            <p>{extension.description}</p>
            {extension.installed ? (
              <button onClick={() => handleManage(extension.id)}>Manage</button>
            ) : (
              <button onClick={() => handleInstall(extension.id)}>Install</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MarketplaceComponent;

