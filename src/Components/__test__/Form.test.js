import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Form from '../Form';
import '@testing-library/jest-dom/extend-expect';

describe('Form', () => {
    it('Debe salir mensaje de error', () => {
        render(<Form />);

        const nameInput = screen.getByPlaceholderText('Nombre y apellido');
        const emailInput = screen.getByPlaceholderText('Email');
        const submitButton = screen.getByRole('button', { className: 'btnForm' });

        fireEvent.change(nameInput, { target: { value: 'Estanislao' } });
        fireEvent.change(emailInput, { target: { value: 'estanislao@example' } });
        fireEvent.click(submitButton);

    expect(
        screen.getByText('Por favor verifique su información nuevamente')
        ).toBeInTheDocument();
    });

    it('Debe pasar el test', () => {
        render(<Form />);

        const nameInput = screen.getByPlaceholderText('Nombre y apellido');
        const emailInput = screen.getByPlaceholderText('Email');
        const submitButton = screen.getByRole('button', { className: 'btnForm' });

        fireEvent.change(nameInput, { target: { value: 'Abril Gomez' } });
        fireEvent.change(emailInput, { target: { value: 'abril@ejemplo.com' } });
        fireEvent.click(submitButton);

    expect(
        screen.getByText('Gracias Abril Gomez, te contactaremos lo antes posible vía email')
        ).toBeInTheDocument();
    });
});

