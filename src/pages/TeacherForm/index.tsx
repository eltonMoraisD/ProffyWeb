import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

function TeacherForm() {
	return (
		<div id="page-teacher-form" className="conatiner">
			<PageHeader
				title="Que incrivel que voce quer dar aulas."
				description="O primeiro passo é preencher esse formulario de inscrição"
			/>

			<main>
				<fieldset>
					<legend>Seus dados</legend>
					<Input name="name" label="Nome Completo" />
					<Input name="avatar" label="Avatar" />
					<Input name="whatsapp" label="whatsapp" />
					<Textarea name="bio" label="Biografia" />
				</fieldset>

				<fieldset>
					<legend>Seobre a aula</legend>

					<Select
						name="subject"
						label="Matéria"
						options={[
							{ value: 'Artes', label: 'Artes' },
							{ value: 'Biologia', label: 'Biologia' },
							{ value: 'Ciencias', label: 'Ciencias' },
							{ value: 'Filosofia', label: 'Filosofia' },
							{ value: 'Fisica', label: 'Fisica' },
							{ value: 'Geografia', label: 'Geografia' },
							{ value: 'Portugues', label: 'Portugues' },
							{ value: 'Quimica', label: 'Quimica' },
							{ value: 'Matemática', label: 'Matemática' },
							{ value: 'História', label: 'História' }
						]}
					/>

					<Input name="cost" label="Custo da sua aula por hora" />
				</fieldset>

				<fieldset>
					<legend>
						Horários disponiveis
						<button type="button">+ Novo horário</button>
					</legend>

					<div className="schedule-item">
						<Select
							name="week_day"
							label="Dia da semana"
							options={[
								{ value: '0', label: 'Domingo' },
								{ value: '1', label: 'Segunda-feira' },
								{ value: '2', label: 'Terça-feira' },
								{ value: '3', label: 'Quarta-feira' },
								{ value: '4', label: 'Quinta-feira' },
								{ value: '5', label: 'Sexta-feira' },
								{ value: '6', label: 'Sábado' }
							]}
						/>

						<Input name="from" label="Das" type="time" />
						<Input name="to" label="Até" type="time" />
					</div>
				</fieldset>

				<footer>
					<p>
						<img src={warningIcon} alt="Aviso Importante" />
						Importante! <br />
						Preencha todos os dados
					</p>
					<button type="button">Salvar cadastro</button>
				</footer>
			</main>
		</div>
	);
}

export default TeacherForm;
